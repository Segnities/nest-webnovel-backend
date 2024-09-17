import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintUpdateInput } from './user-complaint-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';

@ArgsType()
export class UpdateOneUserComplaintArgs {

    @Field(() => UserComplaintUpdateInput, {nullable:false})
    @Type(() => UserComplaintUpdateInput)
    data!: UserComplaintUpdateInput;

    @Field(() => UserComplaintWhereUniqueInput, {nullable:false})
    @Type(() => UserComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;
}
