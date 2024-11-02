import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, News, Novel, UserRating, ContinueReading, Comment } from '@prisma/client';
import { FirebaseAdmin } from '@config/firebase.setup';
export declare class UserService {
    private prisma;
    private readonly admin;
    constructor(prisma: PrismaService, admin: FirebaseAdmin);
    isUsernameHasDuplicate(username: string): Promise<{
        hasDuplicate: boolean;
    }>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            img: string;
            isAdult: boolean;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            likes: number;
            views: number;
            commendableTypeId: number;
            original_title: string | null;
            description: string;
            slug: string | null;
            dislikes: number;
            releaseYear: number | null;
            coverImg: string | null;
            countryId: number;
            status: import(".prisma/client").$Enums.NovelStatus;
            authorId: number;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        body: string;
        likes: number;
        views: number;
        userId: number;
        novelId: number;
        commendableTypeId: number;
    })[]>;
    getUserBookmarks(userId: number): Promise<({
        chapter: {
            novel: {
                id: number;
                img: string;
                isAdult: boolean;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                likes: number;
                views: number;
                commendableTypeId: number;
                original_title: string | null;
                description: string;
                slug: string | null;
                dislikes: number;
                releaseYear: number | null;
                coverImg: string | null;
                countryId: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                authorId: number;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            likes: number;
            views: number;
            novelId: number;
            commendableTypeId: number;
            slug: string;
            content: string;
            chapterNumber: number;
        };
    } & {
        id: number;
        userId: number;
        chapterId: number;
    })[]>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        img: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        userId: number;
        novelId: number | null;
        authorId: number | null;
        message: string;
        typeId: number;
        relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
        relatedEntityId: number;
        notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
        commentId: number | null;
        reviewId: number | null;
        metadata: Prisma.JsonValue | null;
        notificationGroupId: number | null;
    }[]>;
    getUserComments(userId: number): Promise<Comment[]>;
    getUserNews(userId: number): Promise<News[]>;
    getUserNovelSubscriptions(userId: number): Promise<Novel[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        id: number;
        img: string;
        name: string;
    }[]>;
    updateUserRole(userId: number, roleId: number): Promise<User>;
    getUserRatings(userId: number): Promise<UserRating[]>;
    getContinueReadingList(userId: number): Promise<ContinueReading[]>;
    getUserTeam(userId: number): Promise<{
        team: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            chapters_count: number;
            books_count: number;
        };
    }>;
    getUserNovelRatings(userId: number): Promise<({
        novel: {
            id: number;
            title: string;
            likes: number;
            dislikes: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        novelId: number;
        isLiked: boolean;
    })[]>;
    getUserCreatedContent(userId: number): Promise<{
        novels: number;
        reviews: number;
        comments: number;
        news: number;
    }>;
    getUserActivityStats(userId: number): Promise<{
        bookmarksCount: number;
        ratingsCount: number;
        reviewsCount: number;
        commentsCount: number;
    }>;
}
