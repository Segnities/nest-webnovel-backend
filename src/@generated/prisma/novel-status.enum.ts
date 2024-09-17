import { registerEnumType } from '@nestjs/graphql';

export enum NovelStatus {
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    HIATUS = "HIATUS",
    CANCELLED = "CANCELLED"
}


registerEnumType(NovelStatus, { name: 'NovelStatus', description: undefined })
