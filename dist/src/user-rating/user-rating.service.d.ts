import { Prisma, UserRating } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UserRatingService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneById(id: number): Promise<UserRating>;
    create(data: Prisma.UserRatingCreateInput): Promise<UserRating>;
    update(id: number, data: Prisma.UserRatingUpdateInput): Promise<UserRating>;
    delete(id: number): Promise<UserRating>;
}
