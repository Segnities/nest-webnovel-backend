import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutNovelsInput } from './tag-create-without-novels.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutNovelsInput } from './tag-create-or-connect-without-novels.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutNovelsInput {

    @Field(() => [TagCreateWithoutNovelsInput], {nullable:true})
    @Type(() => TagCreateWithoutNovelsInput)
    create?: Array<TagCreateWithoutNovelsInput>;

    @Field(() => [TagCreateOrConnectWithoutNovelsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutNovelsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>>;
}
