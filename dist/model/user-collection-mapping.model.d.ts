import { Collection } from './collection.model';
import { User } from './user.model';
import { NovelCollectionMapping } from './novel-collection-mapping.model';
export declare class UserCollectionMapping {
    id: number;
    collectionId: number;
    collection: Collection;
    userId: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    novelCollectionMapping: NovelCollectionMapping[];
}
