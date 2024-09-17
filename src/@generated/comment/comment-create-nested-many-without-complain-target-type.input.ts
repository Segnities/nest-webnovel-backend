import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutComplainTargetTypeInput } from './comment-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutComplainTargetTypeInput } from './comment-create-or-connect-without-complain-target-type.input';
import { CommentCreateManyComplainTargetTypeInputEnvelope } from './comment-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutComplainTargetTypeInput {

    @Field(() => [CommentCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentCreateWithoutComplainTargetTypeInput)
    create?: Array<CommentCreateWithoutComplainTargetTypeInput>;

    @Field(() => [CommentCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => CommentCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyComplainTargetTypeInputEnvelope)
    createMany?: CommentCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
