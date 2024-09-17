import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutCommendableTypeInput } from './novel-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutCommendableTypeInput } from './novel-create-or-connect-without-commendable-type.input';
import { NovelCreateManyCommendableTypeInputEnvelope } from './novel-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedManyWithoutCommendableTypeInput {

    @Field(() => [NovelCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelCreateWithoutCommendableTypeInput)
    create?: Array<NovelCreateWithoutCommendableTypeInput>;

    @Field(() => [NovelCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => NovelCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyCommendableTypeInputEnvelope)
    createMany?: NovelCreateManyCommendableTypeInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
