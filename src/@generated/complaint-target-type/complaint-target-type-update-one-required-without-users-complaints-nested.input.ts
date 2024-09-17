import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutUsersComplaintsInput } from './complaint-target-type-create-without-users-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutUsersComplaintsInput } from './complaint-target-type-create-or-connect-without-users-complaints.input';
import { ComplaintTargetTypeUpsertWithoutUsersComplaintsInput } from './complaint-target-type-upsert-without-users-complaints.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutUsersComplaintsInput } from './complaint-target-type-update-to-one-with-where-without-users-complaints.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutUsersComplaintsNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput)
    create?: ComplaintTargetTypeCreateWithoutUsersComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutUsersComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutUsersComplaintsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutUsersComplaintsInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutUsersComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutUsersComplaintsInput)
    upsert?: ComplaintTargetTypeUpsertWithoutUsersComplaintsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutUsersComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutUsersComplaintsInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutUsersComplaintsInput;
}
