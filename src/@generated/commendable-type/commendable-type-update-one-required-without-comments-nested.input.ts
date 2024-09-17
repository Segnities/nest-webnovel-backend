import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutCommentsInput } from './commendable-type-create-without-comments.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutCommentsInput } from './commendable-type-create-or-connect-without-comments.input';
import { CommendableTypeUpsertWithoutCommentsInput } from './commendable-type-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { CommendableTypeUpdateToOneWithWhereWithoutCommentsInput } from './commendable-type-update-to-one-with-where-without-comments.input';

@InputType()
export class CommendableTypeUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => CommendableTypeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutCommentsInput)
    create?: CommendableTypeCreateWithoutCommentsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutCommentsInput;

    @Field(() => CommendableTypeUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeUpsertWithoutCommentsInput)
    upsert?: CommendableTypeUpsertWithoutCommentsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => CommendableTypeUpdateToOneWithWhereWithoutCommentsInput)
    update?: CommendableTypeUpdateToOneWithWhereWithoutCommentsInput;
}
