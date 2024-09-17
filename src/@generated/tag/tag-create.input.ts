import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutTagsInput } from '../novel/novel-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelCreateNestedManyWithoutTagsInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutTagsInput;
}
