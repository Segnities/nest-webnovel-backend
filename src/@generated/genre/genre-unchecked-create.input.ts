import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutGenresInput } from '../novel/novel-unchecked-create-nested-many-without-genres.input';

@InputType()
export class GenreUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutGenresInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutGenresInput;
}
