import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutNovelsInput } from './commendable-type-create-without-novels.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutNovelsInput } from './commendable-type-create-or-connect-without-novels.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';

@InputType()
export class CommendableTypeCreateNestedOneWithoutNovelsInput {

    @Field(() => CommendableTypeCreateWithoutNovelsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutNovelsInput)
    create?: CommendableTypeCreateWithoutNovelsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutNovelsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;
}
