import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutNovelsInput } from './commendable-type-create-without-novels.input';

@InputType()
export class CommendableTypeCreateOrConnectWithoutNovelsInput {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateWithoutNovelsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutNovelsInput)
    create!: CommendableTypeCreateWithoutNovelsInput;
}
