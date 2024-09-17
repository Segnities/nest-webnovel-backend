import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorUpdateWithoutNotificationsInput } from './author-update-without-notifications.input';

@InputType()
export class AuthorUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;

    @Field(() => AuthorUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutNotificationsInput)
    data!: AuthorUpdateWithoutNotificationsInput;
}
