import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutTagsInput } from '../novel/novel-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutTagsInput;
}
