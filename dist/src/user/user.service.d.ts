import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma, News, Novel, UserRating, Comment } from '@prisma/client';
import { FirebaseAdmin } from '@config/firebase.setup';
import { CreateUserDto } from './dto/CreateUserDto';
export declare class UserService {
    private prisma;
    private readonly admin;
    constructor(prisma: PrismaService, admin: FirebaseAdmin);
    checkUserUnique(username: string, email: string): Promise<{
        usernameUnique: boolean;
        emailUnique: boolean;
    }>;
    createUser(data: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<{
        id: number;
        email: string;
        username: string;
        fuid: string;
    }[]>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            createdAt: Date;
            authorId: number;
            img: string;
            title: string;
            original_title: string | null;
            description: string;
            slug: string | null;
            likes: number;
            dislikes: number;
            isAdult: boolean;
            releaseYear: number | null;
            coverImg: string | null;
            updatedAt: Date;
            views: number;
            status: import(".prisma/client").$Enums.NovelStatus;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            countryId: number;
            commendableTypeId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        title: string;
        likes: number;
        updatedAt: Date;
        views: number;
        commendableTypeId: number;
        novelId: number;
        body: string;
    })[]>;
    getUserBookmarks(userId: number): Promise<({
        chapter: {
            novel: {
                id: number;
                createdAt: Date;
                authorId: number;
                img: string;
                title: string;
                original_title: string | null;
                description: string;
                slug: string | null;
                likes: number;
                dislikes: number;
                isAdult: boolean;
                releaseYear: number | null;
                coverImg: string | null;
                updatedAt: Date;
                views: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
                countryId: number;
                commendableTypeId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            title: string;
            slug: string;
            likes: number;
            updatedAt: Date;
            views: number;
            commendableTypeId: number;
            novelId: number;
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
        createdAt: Date;
        userId: number;
        authorId: number | null;
        img: string;
        title: string;
        updatedAt: Date;
        message: string;
        relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
        relatedEntityId: number;
        notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
        metadata: Prisma.JsonValue | null;
        typeId: number;
        novelId: number | null;
        commentId: number | null;
        reviewId: number | null;
        notificationGroupId: number | null;
    }[]>;
    getUserComments(userId: number): Promise<Comment[]>;
    getUserNews(userId: number): Promise<News[]>;
    getUserNovelSubscriptions(userId: number): Promise<Novel[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        name: string;
        id: number;
        img: string;
    }[]>;
    updateUserRole(userId: number, roleId: number): Promise<User>;
    getUserRatings(userId: number): Promise<UserRating[]>;
    getUserTeam(userId: number): Promise<{
        team: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
        userId: number;
        updatedAt: Date;
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
