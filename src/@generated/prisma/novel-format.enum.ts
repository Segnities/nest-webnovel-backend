import { registerEnumType } from '@nestjs/graphql';

export enum NovelFormat {
    LIGHT_NOVEL = "LIGHT_NOVEL",
    WEB_NOVEL = "WEB_NOVEL"
}


registerEnumType(NovelFormat, { name: 'NovelFormat', description: undefined })
