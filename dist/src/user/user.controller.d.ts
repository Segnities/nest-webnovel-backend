import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(createUserDto: CreateUserDto): Promise<UserRecord>;
    createUser(createUserDto: Prisma.UserCreateInput): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            likes: number;
            views: number;
            commendableTypeId: number;
            original_title: string | null;
            description: string;
            slug: string;
            img: string;
            dislikes: number;
            isAdult: boolean;
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
        title: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
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
                title: string;
                createdAt: Date;
                updatedAt: Date;
                likes: number;
                views: number;
                commendableTypeId: number;
                original_title: string | null;
                description: string;
                slug: string;
                img: string;
                dislikes: number;
                isAdult: boolean;
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
            title: string;
            createdAt: Date;
            updatedAt: Date;
            likes: number;
            novelId: number;
            commendableTypeId: number;
            content: string;
        };
    } & {
        id: number;
        userId: number;
        chapterId: number;
    })[]>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        novelId: number | null;
        img: string;
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
    getUserComments(userId: number): Promise<{
        id: number;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        likes: number;
        userId: number;
        commendableTypeId: number;
        dislikes: number;
        status: import(".prisma/client").$Enums.CommentStatus;
        nestedLevel: number | null;
        complaintTypeId: number;
        replyToId: number | null;
    }[]>;
    getUserNews(userId: number): Promise<{
        id: number;
        title: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        likes: number;
        views: number;
        userId: number;
        commendableTypeId: number;
        published: boolean;
    }[]>;
    getUserNovelSubscriptions(userId: number): Promise<{
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        likes: number;
        views: number;
        commendableTypeId: number;
        original_title: string | null;
        description: string;
        slug: string;
        img: string;
        dislikes: number;
        isAdult: boolean;
        releaseYear: number | null;
        coverImg: string | null;
        countryId: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        authorId: number;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
    }[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        id: number;
        name: string;
        img: string;
    }[]>;
    getUserPermissions(userId: number): Promise<{
        role: {
            permissions: {
                id: number;
                name: string;
                description: string | null;
                roleId: number;
            }[];
        } & {
            id: number;
            name: string;
            description: string | null;
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
