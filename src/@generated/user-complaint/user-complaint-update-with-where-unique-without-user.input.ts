import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintUpdateWithoutUserInput } from './user-complaint-update-without-user.input';

@InputType()
export class UserComplaintUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserComplaintUpdateWithoutUserInput)
    data!: UserComplaintUpdateWithoutUserInput;
}
