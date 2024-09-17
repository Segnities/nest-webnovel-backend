import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintUpdateWithoutUserInput } from './user-complaint-update-without-user.input';
import { UserComplaintCreateWithoutUserInput } from './user-complaint-create-without-user.input';

@InputType()
export class UserComplaintUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserComplaintUpdateWithoutUserInput)
    update!: UserComplaintUpdateWithoutUserInput;

    @Field(() => UserComplaintCreateWithoutUserInput, {nullable:false})
    @Type(() => UserComplaintCreateWithoutUserInput)
    create!: UserComplaintCreateWithoutUserInput;
}
