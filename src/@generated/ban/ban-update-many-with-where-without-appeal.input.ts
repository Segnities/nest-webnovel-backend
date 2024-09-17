import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanScalarWhereInput } from './ban-scalar-where.input';
import { Type } from 'class-transformer';
import { BanUpdateManyMutationInput } from './ban-update-many-mutation.input';

@InputType()
export class BanUpdateManyWithWhereWithoutAppealInput {

    @Field(() => BanScalarWhereInput, {nullable:false})
    @Type(() => BanScalarWhereInput)
    where!: BanScalarWhereInput;

    @Field(() => BanUpdateManyMutationInput, {nullable:false})
    @Type(() => BanUpdateManyMutationInput)
    data!: BanUpdateManyMutationInput;
}
