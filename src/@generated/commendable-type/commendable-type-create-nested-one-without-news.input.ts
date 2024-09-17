import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutNewsInput } from './commendable-type-create-without-news.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutNewsInput } from './commendable-type-create-or-connect-without-news.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';

@InputType()
export class CommendableTypeCreateNestedOneWithoutNewsInput {

    @Field(() => CommendableTypeCreateWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutNewsInput)
    create?: CommendableTypeCreateWithoutNewsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutNewsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutNewsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
