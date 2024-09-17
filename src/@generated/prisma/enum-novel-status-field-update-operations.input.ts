import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelStatus } from './novel-status.enum';

@InputType()
export class EnumNovelStatusFieldUpdateOperationsInput {

    @Field(() => NovelStatus, {nullable:true})
    set?: keyof typeof NovelStatus;
}
