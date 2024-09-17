import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelFormat } from './novel-format.enum';

@InputType()
export class EnumNovelFormatFieldUpdateOperationsInput {

    @Field(() => NovelFormat, {nullable:true})
    set?: keyof typeof NovelFormat;
}
