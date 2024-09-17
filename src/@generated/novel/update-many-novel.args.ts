import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelUpdateManyMutationInput } from './novel-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NovelWhereInput } from './novel-where.input';

@ArgsType()
export class UpdateManyNovelArgs {

    @Field(() => NovelUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelUpdateManyMutationInput)
    data!: NovelUpdateManyMutationInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
