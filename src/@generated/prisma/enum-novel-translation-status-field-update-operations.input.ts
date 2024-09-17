import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelTranslationStatus } from './novel-translation-status.enum';

@InputType()
export class EnumNovelTranslationStatusFieldUpdateOperationsInput {

    @Field(() => NovelTranslationStatus, {nullable:true})
    set?: keyof typeof NovelTranslationStatus;
}
