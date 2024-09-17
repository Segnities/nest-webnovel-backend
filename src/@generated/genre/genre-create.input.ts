import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutGenresInput } from '../novel/novel-create-nested-many-without-genres.input';

@InputType()
export class GenreCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelCreateNestedManyWithoutGenresInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutGenresInput;
}
