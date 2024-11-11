import { PrismaService } from '../prisma/prisma.service';
import { ContinueReading, Prisma } from '@prisma/client';
import { CreateContinueReadingDto } from './dto/CreateContinueReadingDto';
export declare class ContinueReadingService {
    private prisma;
    constructor(prisma: PrismaService);
    createContinueReading(data: CreateContinueReadingDto): Promise<ContinueReading>;
    createOrUpdateReadingProgress(data: CreateContinueReadingDto): Promise<ContinueReading>;
    getContinueReadingById(id: number): Promise<ContinueReading>;
    updateContinueReading(id: number, data: Prisma.ContinueReadingUpdateInput): Promise<ContinueReading>;
    deleteContinueReading(id: number): Promise<ContinueReading>;
    getContinueReadingByUserId(userId: number): Promise<ContinueReading[]>;
}
