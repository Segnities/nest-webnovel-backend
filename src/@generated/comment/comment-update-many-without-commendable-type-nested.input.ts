import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCommendableTypeInput } from './comment-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCommendableTypeInput } from './comment-create-or-connect-without-commendable-type.input';
import { CommentUpsertWithWhereUniqueWithoutCommendableTypeInput } from './comment-upsert-with-where-unique-without-commendable-type.input';
import { CommentCreateManyCommendableTypeInputEnvelope } from './comment-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutCommendableTypeInput } from './comment-update-with-where-unique-without-commendable-type.input';
import { CommentUpdateManyWithWhereWithoutCommendableTypeInput } from './comment-update-many-with-where-without-commendable-type.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutCommendableTypeNestedInput {

    @Field(() => [CommentCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentCreateWithoutCommendableTypeInput)
    create?: Array<CommentCreateWithoutCommendableTypeInput>;

    @Field(() => [CommentCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutCommendableTypeInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => CommentCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCommendableTypeInputEnvelope)
    createMany?: CommentCreateManyCommendableTypeInputEnvelope;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutCommendableTypeInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutCommendableTypeInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCommendableTypeInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
