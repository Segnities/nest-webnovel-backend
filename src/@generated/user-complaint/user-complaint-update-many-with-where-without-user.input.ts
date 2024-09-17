import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintScalarWhereInput } from './user-complaint-scalar-where.input';
import { Type } from 'class-transformer';
import { UserComplaintUpdateManyMutationInput } from './user-complaint-update-many-mutation.input';

@InputType()
export class UserComplaintUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserComplaintScalarWhereInput, {nullable:false})
    @Type(() => UserComplaintScalarWhereInput)
    where!: UserComplaintScalarWhereInput;

    @Field(() => UserComplaintUpdateManyMutationInput, {nullable:false})
    @Type(() => UserComplaintUpdateManyMutationInput)
    data!: UserComplaintUpdateManyMutationInput;
}
