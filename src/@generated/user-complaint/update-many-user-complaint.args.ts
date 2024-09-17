import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintUpdateManyMutationInput } from './user-complaint-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserComplaintWhereInput } from './user-complaint-where.input';

@ArgsType()
export class UpdateManyUserComplaintArgs {

    @Field(() => UserComplaintUpdateManyMutationInput, {nullable:false})
    @Type(() => UserComplaintUpdateManyMutationInput)
    data!: UserComplaintUpdateManyMutationInput;

    @Field(() => UserComplaintWhereInput, {nullable:true})
    @Type(() => UserComplaintWhereInput)
    where?: UserComplaintWhereInput;
}
