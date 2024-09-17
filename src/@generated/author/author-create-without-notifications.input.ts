import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutAuthorInput } from '../novel/novel-create-nested-many-without-author.input';
import { AuthorSubscriptionCreateNestedManyWithoutAuthorInput } from '../author-subscription/author-subscription-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateWithoutNotificationsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => NovelCreateNestedManyWithoutAuthorInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutAuthorInput;

    @Field(() => AuthorSubscriptionCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionCreateNestedManyWithoutAuthorInput;
}
