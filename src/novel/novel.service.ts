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

@Injectable()
export class NovelService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) { }

  async findOneById(id: number): Promise<Novel> {
    return this.prisma.novel.findUnique({ where: { id } });
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

  async createMany(data: Prisma.NovelCreateManyInput[]): Promise<Prisma.BatchPayload> {
    const localImages: string[] = [];
    try {
      const createdNovels: Prisma.NovelCreateManyInput[] = [];
      for (const novelData of data) {
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
        const novel: Prisma.NovelCreateManyInput = {
          ...novelData,
          img: cloudinaryImgSecureUrl,
          coverImg: cloudinaryCoverSecureUrl,
        };
        createdNovels.push(novel);
      }
      // Create many novels in the database
      return this.prisma.novel.createMany({ data: createdNovels });
    } catch (error) {
      await deleteLocalImages(localImages);
      throw error;
    }
  }

  async findOneBySlug(slug: string): Promise<Novel> {
    return this.prisma.novel.findFirst({ where: { slug } });
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
      include: { author: true },
    });
  }

  async searchNovels(searchTerm: string): Promise<Novel[]> {
    return this.prisma.novel.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm, mode: 'insensitive' } },
          { original_title: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          { author: { name: { contains: searchTerm, mode: 'insensitive' } } },
        ],
      },
      include: { author: true, tags: true, genres: true },
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
}
