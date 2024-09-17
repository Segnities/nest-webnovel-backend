import { User } from './user.model';
import { Chapter } from './chapter.model';
import { Novel } from './novel.model';
export declare class ContinueReading {
    id: number;
    progressPercentage: number;
    userId: number;
    user: User;
    lastChapterId: number;
    lastChapter: Chapter;
    novelId: number;
    novel: Novel;
}
