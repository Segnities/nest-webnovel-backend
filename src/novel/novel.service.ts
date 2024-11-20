import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Prisma,
  Novel,
  NovelStatus,
  NovelFormat,
  NovelTranslationStatus,
} from '@prisma/client';
import compressAndUploadImage from 'utils/compressAndUploadImage';
import { deleteLocalImages } from 'utils/deleteLocalImages';
import { SearchResponse } from 'global_types/search';
import { selectMinimalNovelSetup } from './types/selectNovel';
import { buildAuthorCondition, buildAuthorSearchCondition, buildTitleSearchCondition, buildYearSearchCondition } from './types/whereNovel';
@Injectable()
export class NovelService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) { }

  async findChaptersStatsByChapterSlug(slug: string) {
    return this.prisma.novel.findUnique({
      where: { slug },
      select: {
        isAdult: true,
        slug: true,
        title: true,
        img: true,
        chapters: {
          select: {
            title: true,
            chapterNumber: true,
            slug: true,
          }
        }
      }
    });
  }
  async searchByCombinedConditions(searchTerm: string, limit: number = 20, orderDirection: 'asc' | 'desc' = 'desc') {
    const novelWhere = buildTitleSearchCondition(searchTerm);
    const authorWhere = buildAuthorCondition(searchTerm);
    const yearWhere = buildYearSearchCondition(searchTerm);
    const [novels, novelTotal, authors, authorTotal, novelsByYear, novelsByYearTotal] = await Promise.all([
      this.prisma.novel.findMany({
        where: novelWhere,
        select: selectMinimalNovelSetup,
        take: limit,
        orderBy: { title: orderDirection },
      }),
      this.prisma.novel.count({
        where: novelWhere,
      }),
      this.prisma.author.findMany({
        where: authorWhere,
        select: {
          id: true,
          name: true,
          img: true,
        },
        orderBy: {
          name: orderDirection,
        },
        take: limit,
      }),
      this.prisma.author.count({
        where: authorWhere,
      }),
      this.prisma.novel.findMany({
        where: yearWhere,
        select: selectMinimalNovelSetup,
        orderBy: {
          releaseYear: orderDirection,
        },
      }),
      this.prisma.novel.count({
        where: yearWhere,
      })
    ]);

    const maxTotal = Math.max(novelTotal, authorTotal, novelsByYearTotal);

    return {
      novels: {
        data: novels,
        total: novelTotal,
      },
      authors: {
        data: authors,
        total: authorTotal,
      },
      year: {
        data: novelsByYear,
        total: novelsByYearTotal,
      },
      pagination: {
        limit,
        totalPages: Math.ceil(maxTotal / limit),
      },
    };
  }
  async searchByAuthor(authorName: string, page = 1, limit = 20): Promise<SearchResponse> {
    const skip = (page - 1) * limit;

    const whereCondition: Prisma.NovelWhereInput = buildAuthorSearchCondition(authorName);

    const [novels, total] = await Promise.all([
      this.prisma.novel.findMany({
        where: whereCondition,
        select: {
          id: true,
          title: true,
          slug: true,
          img: true,
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        take: limit,
        skip,
        orderBy: { views: 'desc' },
      }),
      this.prisma.novel.count({ where: whereCondition }),
    ]);

    return {
      data: novels,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  async searchByYear(year: number, page = 1, limit = 20): Promise<SearchResponse> {
    const skip = (page - 1) * limit;

    const whereCondition: Prisma.NovelWhereInput = buildYearSearchCondition(year);

    const [novels, total] = await Promise.all([
      this.prisma.novel.findMany({
        where: whereCondition,
        select: {
          id: true,
          title: true,
          releaseYear: true,
          slug: true,
          img: true,
          author: {
            select: { name: true },
          },
        },
        take: limit,
        skip,
        orderBy: { views: 'desc' },
      }),
      this.prisma.novel.count({ where: whereCondition }),
    ]);

    return {
      data: novels,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  async searchByTitle(searchTerm: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const whereCondition: Prisma.NovelWhereInput = buildTitleSearchCondition(searchTerm);
    const [novels, total] = await Promise.all([
      this.prisma.novel.findMany({
        where: whereCondition,
        select: selectMinimalNovelSetup,
        take: limit,
        skip,
        orderBy: { views: 'desc' },
      }),
      this.prisma.novel.count({ where: whereCondition }),
    ]);

    return {
      data: novels,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  async getDownloadData(slug: string) {
    const chapters_stats = await this.prisma.novel.findUnique({
      where: { slug },
      select: {
        chapters: {
          select: {
            id: true,
            title: true,
            chapterNumber: true,
            slug: true,
            createdAt: true,
            updatedAt: true
          }
        }
      }
    });
    const download_data = await this.prisma.novel.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        coverImg: true,
        img: true,
        description: true,
        format: true,
        genres: true,
        createdAt: true,
        updatedAt: true,
        releaseYear: true,
        isAdult: true,
        status: true,
        slug: true,
        translationStatus: true,
        country: {
          select: {
            title: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
        chapters: {
          select: {
            chapterNumber: true,
            id: true,
            slug: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      }
    });
    if (!download_data) {
      throw new NotFoundException('Novel not found');
    }
    return { download_data, chapters_stats };
  }

  async findOneById(id: number): Promise<Novel> {
    return this.prisma.novel.findUnique({
      where: { id },
      include: {
        author: true,
        alternativeTitles: true,
        tags: true,
        chapters: {
          select: {
            id: true,
            title: true,
            createdAt: true,
            updatedAt: true,
            slug: true,
            views: true,
            chapterNumber: true,
          },
        },
      },
    });
  }
  async createOne(data: Prisma.NovelCreateInput): Promise<Novel> {
    const localImages: string[] = [];
    try {
      // Log input data for debugging
      console.log('Original data:', data);

      const novelImageProps = {
        imageUrl: data.img,
        title: data.original_title,
        width: 800,
        height: 600,
      };

      // Compress novel image
      const novelImage = await compressAndUploadImage(novelImageProps);
      localImages.push(novelImage);

      console.log('Compressed novel image URL:', novelImage);

      const coverImageProps = {
        imageUrl: data.coverImg,
        title: data.original_title,
        width: 1000,
        height: 450,
      };

      const coverImage = data.coverImg
        ? await compressAndUploadImage(coverImageProps)
        : null;
      console.log('Compressed cover image URL:', coverImage);
      localImages.push(coverImage);
      const cloudinaryImgSecureUrl = (
        await this.cloudinaryService.uploadImage(novelImage)
      ).secure_url;
      const cloudinaryCoverSecureUrl = coverImage
        ? (await this.cloudinaryService.uploadImage(coverImage)).secure_url
        : null;

      const createdNovel = await this.prisma.novel.create({
        data: {
          title: data.title,
          description: data.description,
          original_title: data.original_title,
          slug: data.slug,
          releaseYear: data.releaseYear,
          isAdult: data.isAdult,
          translationStatus: data.translationStatus,
          format: data.format,
          status: data.status,
          commendableType: { connect: { id: data.commendableType.connect.id } },
          country: { connect: { id: data.country.connect.id } },
          author: { connect: { id: data.author.connect.id } },
          img: cloudinaryImgSecureUrl,
          coverImg: cloudinaryCoverSecureUrl,
        },
      });
      return createdNovel;
    } catch (error) {
      console.error('Error creating novel:', error); // More detailed error logging
      await deleteLocalImages(localImages);
      throw error;
    }
  }

  async createMany(data: Prisma.NovelCreateManyInput[]): Promise<Novel[]> {
    const localImages: string[] = [];
    try {
      const novels = [];
      for (const novelData of data) {
        if (!novelData.img) {
          throw new Error(`Invalid image URL for novel: ${novelData.original_title}`);
        }
        // Compress novel image
        const novelImageProps = {
          imageUrl: novelData.img,
          title: novelData.original_title,
          width: 800,
          height: 600,
        };
        const novelImage = await compressAndUploadImage(novelImageProps);
        localImages.push(novelImage);
        console.log('Compressed novel image URL:', novelImage);
        // Compress cover image if it exists
        const coverImageProps = novelData.coverImg
          ? {
            imageUrl: novelData.coverImg,
            title: novelData.original_title,
            width: 1000,
            height: 450,
          }
          : null;
        const coverImage = coverImageProps
          ? await compressAndUploadImage(coverImageProps)
          : null;
        localImages.push(coverImage);
        console.log('Compressed cover image URL:', coverImage);
        // Upload images to Cloudinary
        const cloudinaryImgSecureUrl = (
          await this.cloudinaryService.uploadImage(novelImage)
        ).secure_url;
        const cloudinaryCoverSecureUrl = coverImage
          ? (await this.cloudinaryService.uploadImage(coverImage)).secure_url
          : null;
        // Create novel object
        const novel = {
          ...novelData,
          img: cloudinaryImgSecureUrl,
          coverImg: cloudinaryCoverSecureUrl,
        };
        novels.push(novel);
      }
      // Create many novels in the database
      const createdNovels = await this.prisma.novel.createManyAndReturn({
        data: novels,
      });
      return createdNovels;
    } catch (error) {
      await deleteLocalImages(localImages);
      throw error;
    }
  }

  async findOneBySlug(slug: string): Promise<Novel> {
    return this.prisma.novel.findUnique({
      where: { slug },
      include: {
        author: true,
        alternativeTitles: true,
        country: {
          select: {
            title: true,
          },
        },
        tags: true,
        chapters: {
          select: {
            id: true,
            title: true,
            createdAt: true,
            updatedAt: true,
            slug: true,
            views: true,
            chapterNumber: true,
          },
        },
      },
    });
  }

  async findOneByTitle(title: string): Promise<Novel> {
    return this.prisma.novel.findFirst({ where: { title } });
  }

  async findOneByOriginalTitle(original_title: string): Promise<Novel> {
    return this.prisma.novel.findFirst({ where: { original_title } });
  }

  async findAll(args: Prisma.NovelFindManyArgs): Promise<Novel[]> {
    try {
      return this.prisma.novel.findMany(args);
    } catch (error) {
      throw error;
    }
  }
  async likeNovel(novelId: number): Promise<Novel> {
    return this.prisma.novel.update({
      where: { id: novelId },
      data: { likes: { increment: 1 } },
    });
  }
  async dislikeNovel(novelId: number): Promise<Novel> {
    return this.prisma.novel.update({
      where: { id: novelId },
      data: { dislikes: { increment: 1 } },
    });
  }

  async updateOne(id: number, data: Prisma.NovelUpdateInput): Promise<Novel> {
    try {
      return this.prisma.novel.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }
  async deleteOne(id: number): Promise<Novel> {
    try {
      return this.prisma.novel.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
  async findByAuthor(authorId: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { authorId },
      include: { author: true, tags: true, genres: true },
    });
  }

  async findByStatus(status: NovelStatus): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { status },
      include: { author: true },
    });
  }

  async findByFormat(format: NovelFormat): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { format },
      include: { author: true },
    });
  }

  async findByTranslationStatus(
    translationStatus: NovelTranslationStatus,
  ): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { translationStatus },
      include: { author: true },
    });
  }

  async findByTag(tagId: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        tags: {
          some: { id: tagId },
        },
      },
      include: { author: true, tags: true },
    });
  }

  async findByTags(tagIds: number[]): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        tags: {
          some: {
            id: {
              in: tagIds,
            },
          },
        },
      },
    });
  }

  async findByGenre(genreId: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        genres: {
          some: { id: genreId },
        },
      },
      include: { author: true, genres: true },
    });
  }

  async findByGenres(genreIds: number[]): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        genres: {
          some: {
            id: {
              in: genreIds,
            },
          },
        },
      },
      include: { author: true, genres: true },
    });
  }

  async findByCountry(countryId: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { countryId },
      include: { author: true, country: true },
    });
  }

  async findByCountries(countryIds: number[]): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        countryId: {
          in: countryIds,
        },
      },
      include: { author: true, country: true },
    });
  }

  async getTopRatedNovels(limit: number = 10): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      take: limit,
      orderBy: {
        likes: 'desc',
      },
      include: { author: true },
    });
  }

  async getMostViewedNovels(limit: number = 10): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      take: limit,
      orderBy: { views: 'desc' },
      include: { author: true },
    });
  }

  async getRecentlyUpdatedNovels(limit: number = 10): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      take: limit,
      orderBy: { updatedAt: 'desc' },
      include: { tags: true, genres: true, author: true, chapters: true },
    });
  }

  async findRecentlyCreatedNovels(limit: number = 10) {
    return this.prisma.novel.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        country: {
          select: { title: true },
        },
        img: true,
        createdAt: true,
      },
    });
  }

  async getNovelWithChapters(
    novelId: number,
  ): Promise<Novel & { chapters: any[] }> {
    const novel = await this.prisma.novel.findUnique({
      where: { id: novelId },
      include: {
        author: true,
        alternativeTitles: true,
        tags: true,
        genres: true,
        chapters: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!novel) {
      throw new NotFoundException(`Роман з ID ${novelId} не знайдено`);
    }

    return novel;
  }

  async updateNovelViews(novelId: number): Promise<Novel> {
    return this.prisma.novel.update({
      where: { id: novelId },
      data: { views: { increment: 1 } },
    });
  }

  async getNovelStats(novelId: number): Promise<any> {
    const novel = await this.prisma.novel.findUnique({
      where: { id: novelId },
      include: {
        _count: {
          select: { chapters: true, reviews: true },
        },
      },
    });

    if (!novel) {
      throw new NotFoundException(`Роман з ID ${novelId} не знайдено`);
    }

    return {
      id: novel.id,
      title: novel.title,
      views: novel.views,
      chapterCount: novel._count.chapters,
      reviewCount: novel._count.reviews,
      likes: novel.likes,
      dislikes: novel.dislikes,
    };
  }

  async getRelatedNovels(novelId: number, limit: number = 5): Promise<Novel[]> {
    const novel = await this.prisma.novel.findUnique({
      where: { id: novelId },
      include: { tags: true, genres: true },
    });

    if (!novel) {
      throw new NotFoundException(`Роман з ID ${novelId} не знайдено`);
    }
    return this.prisma.novel.findMany({
      where: {
        OR: [
          { tags: { some: { id: { in: novel.tags.map((tag) => tag.id) } } } },
          {
            genres: {
              some: { id: { in: novel.genres.map((genre) => genre.id) } },
            },
          },
        ],
        NOT: { id: novelId },
      },
      take: limit,
      include: { author: true, tags: true, genres: true },
    });
  }
  async getNovelsByReleaseYear(year: number): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { releaseYear: year },
      include: { author: true, country: true },
    });
  }

  async getAdultNovels(): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { isAdult: true },
      include: { author: true },
    });
  }

  async getNonAdultNovels(): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: { isAdult: false },
      include: { author: true },
    });
  }

  async getNovelsByAuthorName(authorName: string): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        author: {
          name: {
            contains: authorName,
            mode: 'insensitive',
          },
        },
      },
      include: { author: true },
    });
  }

  async getNovelsByAlternativeTitle(title: string): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        alternativeTitles: {
          some: {
            title: {
              contains: title,
              mode: 'insensitive',
            },
          },
        },
      },
      include: { author: true, alternativeTitles: true },
    });
  }

  async getDiscoverNovels() {
    const top500Novels = await this.prisma.novel.findMany({
      orderBy: {
        likes: 'desc', // Change to descending order to get top novels
      },
      take: 500,
      select: selectMinimalNovelSetup,
    });
    const shuffled = top500Novels.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 20);
  }

  async getTimeRatingNovels() {
    const now = new Date();
    const weekAgo = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7,
    );
    const monthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate(),
    );

    const weeklyTop = [];
    const monthlyTop = [];

    const novels = await this.prisma.novel.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        country: {
          select: { title: true },
        },
        img: true,
        createdAt: true,
      },
      orderBy: {
        likes: 'desc',
      },
    });

    for (const novel of novels) {
      const createdAt = new Date(novel.createdAt);
      if (createdAt >= monthAgo && monthlyTop.length < 10) {
        monthlyTop.push(novel);
      }
      if (createdAt >= weekAgo && weeklyTop.length < 10) {
        weeklyTop.push(novel);
      }
      if (weeklyTop.length >= 10 && monthlyTop.length >= 10) {
        break;
      }
    }
    return {
      weeklyTop: novels.slice(0, 10),
      monthlyTop,
      allTimeTop: novels.slice(0, 10),
    };
  }

  async getTopRatingNovels({
    limit,
    select,
  }: {
    limit: number;
    select: Prisma.NovelSelect;
  }) {
    return this.prisma.novel.findMany({
      take: limit,
      orderBy: {
        likes: 'desc',
      },
      select,
    });
  }

  async findLastUpdatedChaptersToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.prisma.novel.findMany({
      where: {
        chapters: {
          some: {},
        },
      },
      select: {
        id: true,
        img: true,
        title: true,
        slug: true,
        country: {
          select: {
            title: true,
          },
        },
        releaseYear: true,
        chapters: {
          select: {
            slug: true,
            title: true,
            id: true,
            chapterNumber: true,
          },
          where: {
            createdAt: {
              gte: today,
            },
          },
        },
      },
    });
  }
}
