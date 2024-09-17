import { registerEnumType } from '@nestjs/graphql';

export enum BookmarkScalarFieldEnum {
    id = "id",
    userId = "userId",
    chapterId = "chapterId"
}


registerEnumType(BookmarkScalarFieldEnum, { name: 'BookmarkScalarFieldEnum', description: undefined })
