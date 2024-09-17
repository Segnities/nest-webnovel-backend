import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutAuthorInput } from '../novel/novel-unchecked-create-nested-many-without-author.input';
import { AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput } from '../author-subscription/author-subscription-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateWithoutNotificationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput;
}
