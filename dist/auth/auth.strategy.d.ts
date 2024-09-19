import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';
declare const FirebaseAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class FirebaseAuthStrategy extends FirebaseAuthStrategy_base {
    private configService;
    private prisma;
    private firebaseApp;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(token: string): Promise<{
        role: {
            id: number;
            name: string;
            description: string | null;
        };
    } & {
        id: number;
        username: string;
        email: string;
        provider: import(".prisma/client").$Enums.Provider;
        img: string;
        createdAt: Date;
        updatedAt: Date;
        roleId: number;
        teamId: number | null;
    }>;
}
export {};
