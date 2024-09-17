import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutChaptersInput } from './commendable-type-create-without-chapters.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutChaptersInput } from './commendable-type-create-or-connect-without-chapters.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';

@InputType()
export class CommendableTypeCreateNestedOneWithoutChaptersInput {

    @Field(() => CommendableTypeCreateWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutChaptersInput)
    create?: CommendableTypeCreateWithoutChaptersInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutChaptersInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutChaptersInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutChaptersInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
