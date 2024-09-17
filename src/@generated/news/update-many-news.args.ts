import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsUpdateManyMutationInput } from './news-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NewsWhereInput } from './news-where.input';

@ArgsType()
export class UpdateManyNewsArgs {

    @Field(() => NewsUpdateManyMutationInput, {nullable:false})
    @Type(() => NewsUpdateManyMutationInput)
    data!: NewsUpdateManyMutationInput;

    @Field(() => NewsWhereInput, {nullable:true})
    @Type(() => NewsWhereInput)
    where?: NewsWhereInput;
}
