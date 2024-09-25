import { ContinueReadingService } from './continue-reading.service';
import { ContinueReading, Prisma } from '@prisma/client';
export declare class ContinueReadingController {
    private readonly continueReadingService;
    constructor(continueReadingService: ContinueReadingService);
    createContinueReading(data: Prisma.ContinueReadingCreateInput): Promise<ContinueReading>;
    getContinueReadingById(id: number): Promise<ContinueReading>;
    updateContinueReading(id: number, data: Prisma.ContinueReadingUpdateInput): Promise<ContinueReading>;
    deleteContinueReading(id: number): Promise<ContinueReading>;
    getContinueReadingByUserId(userId: number): Promise<ContinueReading[]>;
    updateProgress(userId: number, novelId: number, progressPercentage: number): Promise<ContinueReading>;
    getUsersReadingNovel(novelId: number): Promise<ContinueReading[]>;
    countUsersReadingNovel(novelId: number): Promise<number>;
}
