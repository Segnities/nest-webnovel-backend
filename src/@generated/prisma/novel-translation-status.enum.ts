import { registerEnumType } from '@nestjs/graphql';

export enum NovelTranslationStatus {
    NOT_TRANSLATED = "NOT_TRANSLATED",
    PARTIALLY_TRANSLATED = "PARTIALLY_TRANSLATED",
    FULLY_TRANSLATED = "FULLY_TRANSLATED",
    MACHINE_TRANSLATED = "MACHINE_TRANSLATED",
    ONGOING = "ONGOING"
}


registerEnumType(NovelTranslationStatus, { name: 'NovelTranslationStatus', description: undefined })
