import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { UserComplaintCreateInput } from './user-complaint-create.input';
import { UserComplaintUpdateInput } from './user-complaint-update.input';

@ArgsType()
export class UpsertOneUserComplaintArgs {

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => UserComplaintCreateInput, {nullable:false})
    @Type(() => UserComplaintCreateInput)
    create!: UserComplaintCreateInput;

    @Field(() => UserComplaintUpdateInput, {nullable:false})
    @Type(() => UserComplaintUpdateInput)
    update!: UserComplaintUpdateInput;
}
