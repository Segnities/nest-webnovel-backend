import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutCommendableTypeInput } from './news-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutCommendableTypeInput } from './news-create-or-connect-without-commendable-type.input';
import { NewsCreateManyCommendableTypeInputEnvelope } from './news-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';

@InputType()
export class NewsCreateNestedManyWithoutCommendableTypeInput {

    @Field(() => [NewsCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsCreateWithoutCommendableTypeInput)
    create?: Array<NewsCreateWithoutCommendableTypeInput>;

    @Field(() => [NewsCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => NewsCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyCommendableTypeInputEnvelope)
    createMany?: NewsCreateManyCommendableTypeInputEnvelope;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;
}
