import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutAuthorInput } from '../novel/novel-create-nested-many-without-author.input';
import { NotificationCreateNestedManyWithoutAuthorInput } from '../notification/notification-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateWithoutAuthorSubscriptionInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => NovelCreateNestedManyWithoutAuthorInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutAuthorInput;

    @Field(() => NotificationCreateNestedManyWithoutAuthorInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutAuthorInput;
}
