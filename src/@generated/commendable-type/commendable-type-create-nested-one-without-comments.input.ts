import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutCommentsInput } from './commendable-type-create-without-comments.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutCommentsInput } from './commendable-type-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';

@InputType()
export class CommendableTypeCreateNestedOneWithoutCommentsInput {

    @Field(() => CommendableTypeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutCommentsInput)
    create?: CommendableTypeCreateWithoutCommentsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutCommentsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
