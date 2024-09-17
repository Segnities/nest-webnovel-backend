import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintUpdateWithoutComplaintTargetTypeInput } from './user-complaint-update-without-complaint-target-type.input';
import { UserComplaintCreateWithoutComplaintTargetTypeInput } from './user-complaint-create-without-complaint-target-type.input';

@InputType()
export class UserComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintUpdateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => UserComplaintUpdateWithoutComplaintTargetTypeInput)
    update!: UserComplaintUpdateWithoutComplaintTargetTypeInput;

    @Field(() => UserComplaintCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => UserComplaintCreateWithoutComplaintTargetTypeInput)
    create!: UserComplaintCreateWithoutComplaintTargetTypeInput;
}
