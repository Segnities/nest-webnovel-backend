import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutChaptersInput } from './commendable-type-create-without-chapters.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutChaptersInput } from './commendable-type-create-or-connect-without-chapters.input';
import { CommendableTypeUpsertWithoutChaptersInput } from './commendable-type-upsert-without-chapters.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { CommendableTypeUpdateToOneWithWhereWithoutChaptersInput } from './commendable-type-update-to-one-with-where-without-chapters.input';

@InputType()
export class CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput {

    @Field(() => CommendableTypeCreateWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutChaptersInput)
    create?: CommendableTypeCreateWithoutChaptersInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutChaptersInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutChaptersInput;

    @Field(() => CommendableTypeUpsertWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeUpsertWithoutChaptersInput)
    upsert?: CommendableTypeUpsertWithoutChaptersInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeUpdateToOneWithWhereWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeUpdateToOneWithWhereWithoutChaptersInput)
    update?: CommendableTypeUpdateToOneWithWhereWithoutChaptersInput;
}
