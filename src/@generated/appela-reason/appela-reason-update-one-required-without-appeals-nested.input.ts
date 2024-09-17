import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppelaReasonCreateWithoutAppealsInput } from './appela-reason-create-without-appeals.input';
import { Type } from 'class-transformer';
import { AppelaReasonCreateOrConnectWithoutAppealsInput } from './appela-reason-create-or-connect-without-appeals.input';
import { AppelaReasonUpsertWithoutAppealsInput } from './appela-reason-upsert-without-appeals.input';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';
import { AppelaReasonUpdateToOneWithWhereWithoutAppealsInput } from './appela-reason-update-to-one-with-where-without-appeals.input';

@InputType()
export class AppelaReasonUpdateOneRequiredWithoutAppealsNestedInput {

    @Field(() => AppelaReasonCreateWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonCreateWithoutAppealsInput)
    create?: AppelaReasonCreateWithoutAppealsInput;

    @Field(() => AppelaReasonCreateOrConnectWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonCreateOrConnectWithoutAppealsInput)
    connectOrCreate?: AppelaReasonCreateOrConnectWithoutAppealsInput;

    @Field(() => AppelaReasonUpsertWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonUpsertWithoutAppealsInput)
    upsert?: AppelaReasonUpsertWithoutAppealsInput;

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:true})
    @Type(() => AppelaReasonWhereUniqueInput)
    connect?: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;

    @Field(() => AppelaReasonUpdateToOneWithWhereWithoutAppealsInput, {nullable:true})
    @Type(() => AppelaReasonUpdateToOneWithWhereWithoutAppealsInput)
    update?: AppelaReasonUpdateToOneWithWhereWithoutAppealsInput;
}
