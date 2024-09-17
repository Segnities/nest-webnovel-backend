import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCommendableTypeInput } from './comment-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCommendableTypeInput } from './comment-create-or-connect-without-commendable-type.input';
import { CommentCreateManyCommendableTypeInputEnvelope } from './comment-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutCommendableTypeInput {

    @Field(() => [CommentCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentCreateWithoutCommendableTypeInput)
    create?: Array<CommentCreateWithoutCommendableTypeInput>;

    @Field(() => [CommentCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => CommentCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCommendableTypeInputEnvelope)
    createMany?: CommentCreateManyCommendableTypeInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
