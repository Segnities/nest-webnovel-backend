import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutNewsInput } from './complaint-target-type-create-without-news.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutNewsInput } from './complaint-target-type-create-or-connect-without-news.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutNewsInput {

    @Field(() => ComplaintTargetTypeCreateWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutNewsInput)
    create?: ComplaintTargetTypeCreateWithoutNewsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutNewsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutNewsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
