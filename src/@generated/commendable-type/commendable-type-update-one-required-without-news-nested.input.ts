import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutNewsInput } from './commendable-type-create-without-news.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutNewsInput } from './commendable-type-create-or-connect-without-news.input';
import { CommendableTypeUpsertWithoutNewsInput } from './commendable-type-upsert-without-news.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { CommendableTypeUpdateToOneWithWhereWithoutNewsInput } from './commendable-type-update-to-one-with-where-without-news.input';

@InputType()
export class CommendableTypeUpdateOneRequiredWithoutNewsNestedInput {

    @Field(() => CommendableTypeCreateWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutNewsInput)
    create?: CommendableTypeCreateWithoutNewsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutNewsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutNewsInput;

    @Field(() => CommendableTypeUpsertWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeUpsertWithoutNewsInput)
    upsert?: CommendableTypeUpsertWithoutNewsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeUpdateToOneWithWhereWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeUpdateToOneWithWhereWithoutNewsInput)
    update?: CommendableTypeUpdateToOneWithWhereWithoutNewsInput;
}
