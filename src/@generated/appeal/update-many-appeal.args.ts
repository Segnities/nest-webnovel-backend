import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealUpdateManyMutationInput } from './appeal-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppealWhereInput } from './appeal-where.input';

@ArgsType()
export class UpdateManyAppealArgs {

    @Field(() => AppealUpdateManyMutationInput, {nullable:false})
    @Type(() => AppealUpdateManyMutationInput)
    data!: AppealUpdateManyMutationInput;

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;
}
