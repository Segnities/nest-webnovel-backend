import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutAuthorInput } from '../novel/novel-unchecked-create-nested-many-without-author.input';
import { NotificationUncheckedCreateNestedManyWithoutAuthorInput } from '../notification/notification-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateWithoutAuthorSubscriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutAuthorInput;
}
