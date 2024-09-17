import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput } from '../author-subscription/author-subscription-unchecked-create-nested-many-without-author.input';
import { NotificationUncheckedCreateNestedManyWithoutAuthorInput } from '../notification/notification-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateWithoutNovelsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutAuthorInput;
}
