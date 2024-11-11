import { ContinueReadingService } from './continue-reading.service';
import { ContinueReading, Prisma } from '@prisma/client';
import { CreateContinueReadingDto } from './dto/CreateContinueReadingDto';
export declare class ContinueReadingController {
    private readonly continueReadingService;
    constructor(continueReadingService: ContinueReadingService);
    createContinueReading(data: CreateContinueReadingDto): Promise<ContinueReading>;
    createOrUpdateProgress(data: CreateContinueReadingDto): Promise<{
        id: number;
        userId: number;
        lastChapterId: number;
    }>;
    getContinueReadingById(id: number): Promise<ContinueReading>;
    updateContinueReading(id: number, data: Prisma.ContinueReadingUpdateInput): Promise<ContinueReading>;
    deleteContinueReading(id: number): Promise<ContinueReading>;
    getContinueReadingByUserId(userId: number): Promise<ContinueReading[]>;
}
