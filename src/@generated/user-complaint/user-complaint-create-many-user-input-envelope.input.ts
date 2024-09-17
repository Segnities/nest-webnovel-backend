import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateManyUserInput } from './user-complaint-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserComplaintCreateManyUserInputEnvelope {

    @Field(() => [UserComplaintCreateManyUserInput], {nullable:false})
    @Type(() => UserComplaintCreateManyUserInput)
    data!: Array<UserComplaintCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
