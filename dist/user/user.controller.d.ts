import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: Prisma.UserCreateInput): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    getUserReviews(userId: number): Promise<({
        novel: {
            id: number;
            title: string;
            original_title: string | null;
            description: string;
            img: string;
            isAdult: boolean;
            releaseYear: number | null;
            coverImg: string | null;
            createdAt: Date;
            updatedAt: Date;
            views: number;
            countryId: number;
            status: import(".prisma/client").$Enums.NovelStatus;
            authorId: number;
            translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
            format: import(".prisma/client").$Enums.NovelFormat;
            commendableTypeId: number;
            complaintTargetId: number;
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
        complaintTargetId: number;
    })[]>;
    getUserBookmarks(userId: number): Promise<({
        chapter: {
            novel: {
                id: number;
                title: string;
                original_title: string | null;
                description: string;
                img: string;
                isAdult: boolean;
                releaseYear: number | null;
                coverImg: string | null;
                createdAt: Date;
                updatedAt: Date;
                views: number;
                countryId: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                authorId: number;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
                commendableTypeId: number;
                complaintTargetId: number;
            };
        } & {
            id: number;
            title: string;
            content: string;
            likes: number;
            createdAt: Date;
            updatedAt: Date;
            novelId: number;
            commendableTypeId: number;
            complaitTypeId: number;
            complaintTargetId: number;
        };
    } & {
        id: number;
        userId: number;
        chapterId: number;
    })[]>;
    getUserNotifications(userId: number): Promise<{
        id: number;
        title: string;
        message: string;
        img: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        typeId: number;
        relatedEntityType: import(".prisma/client").$Enums.NotificationRelatedEntity;
        relatedEntityId: number;
        notificationStatus: import(".prisma/client").$Enums.NotificationMessageStatus;
        novelId: number | null;
        commentId: number | null;
        reviewId: number | null;
        authorId: number | null;
        metadata: Prisma.JsonValue | null;
        notificationGroupId: number | null;
    }[]>;
    getUserComments(userId: number): Promise<{
        id: number;
        userId: number;
        nestedLevel: number | null;
        body: string;
        likes: number;
        dislikes: number;
        status: import(".prisma/client").$Enums.CommentStatus;
        commendableTypeId: number;
        createdAt: Date;
        updatedAt: Date;
        complaintTypeId: number;
        replyToId: number | null;
        complaintTargetId: number;
    }[]>;
    getUserNews(userId: number): Promise<{
        id: number;
        title: string;
        body: string;
        likes: number;
        views: number;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        commendableTypeId: number;
        userId: number;
        complaintTargetId: number;
    }[]>;
    getUserNovelSubscriptions(userId: number): Promise<{
        id: number;
        title: string;
        original_title: string | null;
        description: string;
        img: string;
        isAdult: boolean;
        releaseYear: number | null;
        coverImg: string | null;
        createdAt: Date;
        updatedAt: Date;
        views: number;
        countryId: number;
        status: import(".prisma/client").$Enums.NovelStatus;
        authorId: number;
        translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
        format: import(".prisma/client").$Enums.NovelFormat;
        commendableTypeId: number;
        complaintTargetId: number;
    }[]>;
    getUserAuthorSubscriptions(userId: number): Promise<{
        id: number;
        name: string;
        img: string;
    }[]>;
    getUserCollections(userId: number): Promise<({
        novelCollectionMapping: ({
            novel: {
                id: number;
                title: string;
                original_title: string | null;
                description: string;
                img: string;
                isAdult: boolean;
                releaseYear: number | null;
                coverImg: string | null;
                createdAt: Date;
                updatedAt: Date;
                views: number;
                countryId: number;
                status: import(".prisma/client").$Enums.NovelStatus;
                authorId: number;
                translationStatus: import(".prisma/client").$Enums.NovelTranslationStatus;
                format: import(".prisma/client").$Enums.NovelFormat;
                commendableTypeId: number;
                complaintTargetId: number;
            };
        } & {
            id: number;
            novelId: number;
            userCollectionId: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
        collection: {
            id: number;
            title: string;
            description: string;
            isDefault: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        collectionId: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
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
    getUserAppeals(userId: number): Promise<({
        appeal: {
            id: number;
            name: string;
            description: string;
        };
        reviewedByUser: {
            id: number;
            username: string;
            email: string;
            provider: import(".prisma/client").$Enums.Provider;
            img: string;
            createdAt: Date;
            updatedAt: Date;
            roleId: number;
            teamId: number | null;
        };
    } & {
        id: number;
        title: string;
        body: string;
        createdAt: Date;
        updatedAt: Date;
        reviewedAt: Date;
        status: import(".prisma/client").$Enums.ApprovalStatus;
        appealReasonId: number;
        reviewedBy: number;
    })[]>;
    getUserNovelRatings(userId: number): Promise<({
        novel: {
            novelRating: {
                id: number;
                votesCount: number;
                avgRating: number;
                totalRating: number;
                novelId: number;
            };
            id: number;
            title: string;
        };
    } & {
        id: number;
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        novelId: number;
        userId: number;
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
