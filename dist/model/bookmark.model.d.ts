import { User } from './user.model';
import { Chapter } from './chapter.model';
export declare class Bookmark {
    id: number;
    userId: number;
    user: User;
    chapterId: number;
    chapter: Chapter;
}
