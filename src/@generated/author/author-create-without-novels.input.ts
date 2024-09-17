import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateNestedManyWithoutAuthorInput } from '../author-subscription/author-subscription-create-nested-many-without-author.input';
import { NotificationCreateNestedManyWithoutAuthorInput } from '../notification/notification-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateWithoutNovelsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => AuthorSubscriptionCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionCreateNestedManyWithoutAuthorInput;

    @Field(() => NotificationCreateNestedManyWithoutAuthorInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutAuthorInput;
}
