import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintWhereInput } from './user-complaint-where.input';
import { Type } from 'class-transformer';
import { UserComplaintOrderByWithRelationInput } from './user-complaint-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserComplaintWhereUniqueInput } from './user-complaint-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserComplaintScalarFieldEnum } from './user-complaint-scalar-field.enum';

@ArgsType()
export class FindFirstUserComplaintOrThrowArgs {

    @Field(() => UserComplaintWhereInput, {nullable:true})
    @Type(() => UserComplaintWhereInput)
    where?: UserComplaintWhereInput;

    @Field(() => [UserComplaintOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserComplaintOrderByWithRelationInput>;

    @Field(() => UserComplaintWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserComplaintWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserComplaintScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserComplaintScalarFieldEnum>;
}
