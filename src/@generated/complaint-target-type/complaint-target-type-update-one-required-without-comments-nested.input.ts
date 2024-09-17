import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutCommentsInput } from './complaint-target-type-create-without-comments.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutCommentsInput } from './complaint-target-type-create-or-connect-without-comments.input';
import { ComplaintTargetTypeUpsertWithoutCommentsInput } from './complaint-target-type-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutCommentsInput } from './complaint-target-type-update-to-one-with-where-without-comments.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutCommentsInput)
    create?: ComplaintTargetTypeCreateWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutCommentsInput)
    upsert?: ComplaintTargetTypeUpsertWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutCommentsInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutCommentsInput;
}
