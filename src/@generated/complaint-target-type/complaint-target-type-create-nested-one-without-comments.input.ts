import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutCommentsInput } from './complaint-target-type-create-without-comments.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutCommentsInput } from './complaint-target-type-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutCommentsInput {

    @Field(() => ComplaintTargetTypeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutCommentsInput)
    create?: ComplaintTargetTypeCreateWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
