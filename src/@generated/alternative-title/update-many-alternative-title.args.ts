import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleUpdateManyMutationInput } from './alternative-title-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';

@ArgsType()
export class UpdateManyAlternativeTitleArgs {

    @Field(() => AlternativeTitleUpdateManyMutationInput, {nullable:false})
    @Type(() => AlternativeTitleUpdateManyMutationInput)
    data!: AlternativeTitleUpdateManyMutationInput;

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    @Type(() => AlternativeTitleWhereInput)
    where?: AlternativeTitleWhereInput;
}
