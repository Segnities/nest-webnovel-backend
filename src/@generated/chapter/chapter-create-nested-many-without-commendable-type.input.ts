import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutCommendableTypeInput } from './chapter-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutCommendableTypeInput } from './chapter-create-or-connect-without-commendable-type.input';
import { ChapterCreateManyCommendableTypeInputEnvelope } from './chapter-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@InputType()
export class ChapterCreateNestedManyWithoutCommendableTypeInput {

    @Field(() => [ChapterCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterCreateWithoutCommendableTypeInput)
    create?: Array<ChapterCreateWithoutCommendableTypeInput>;

    @Field(() => [ChapterCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => ChapterCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyCommendableTypeInputEnvelope)
    createMany?: ChapterCreateManyCommendableTypeInputEnvelope;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;
}
