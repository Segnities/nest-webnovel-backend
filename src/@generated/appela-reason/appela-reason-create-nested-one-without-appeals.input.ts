import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppelaReasonCreateWithoutAppealsInput } from './appela-reason-create-without-appeals.input';
import { Type } from 'class-transformer';
import { AppelaReasonCreateOrConnectWithoutAppealsInput } from './appela-reason-create-or-connect-without-appeals.input';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';

@InputType()
export class AppelaReasonCreateNestedOneWithoutAppealsInput {

    @Field(() => AppelaReasonCreateWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonCreateWithoutAppealsInput)
    create?: AppelaReasonCreateWithoutAppealsInput;

    @Field(() => AppelaReasonCreateOrConnectWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonCreateOrConnectWithoutAppealsInput)
    connectOrCreate?: AppelaReasonCreateOrConnectWithoutAppealsInput;

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:true})
    @Type(() => AppelaReasonWhereUniqueInput)
    connect?: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;
}
