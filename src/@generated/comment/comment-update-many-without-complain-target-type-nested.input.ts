import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutComplainTargetTypeInput } from './comment-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutComplainTargetTypeInput } from './comment-create-or-connect-without-complain-target-type.input';
import { CommentUpsertWithWhereUniqueWithoutComplainTargetTypeInput } from './comment-upsert-with-where-unique-without-complain-target-type.input';
import { CommentCreateManyComplainTargetTypeInputEnvelope } from './comment-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutComplainTargetTypeInput } from './comment-update-with-where-unique-without-complain-target-type.input';
import { CommentUpdateManyWithWhereWithoutComplainTargetTypeInput } from './comment-update-many-with-where-without-complain-target-type.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutComplainTargetTypeNestedInput {

    @Field(() => [CommentCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentCreateWithoutComplainTargetTypeInput)
    create?: Array<CommentCreateWithoutComplainTargetTypeInput>;

    @Field(() => [CommentCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutComplainTargetTypeInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => CommentCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyComplainTargetTypeInputEnvelope)
    createMany?: CommentCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutComplainTargetTypeInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutComplainTargetTypeInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutComplainTargetTypeInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
