import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutNewsInput } from './complaint-target-type-create-without-news.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutNewsInput } from './complaint-target-type-create-or-connect-without-news.input';
import { ComplaintTargetTypeUpsertWithoutNewsInput } from './complaint-target-type-upsert-without-news.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutNewsInput } from './complaint-target-type-update-to-one-with-where-without-news.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutNewsNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutNewsInput)
    create?: ComplaintTargetTypeCreateWithoutNewsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutNewsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutNewsInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutNewsInput)
    upsert?: ComplaintTargetTypeUpsertWithoutNewsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutNewsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutNewsInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutNewsInput;
}
