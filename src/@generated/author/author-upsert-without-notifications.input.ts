import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutNotificationsInput } from './author-update-without-notifications.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutNotificationsInput } from './author-create-without-notifications.input';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorUpsertWithoutNotificationsInput {

    @Field(() => AuthorUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutNotificationsInput)
    update!: AuthorUpdateWithoutNotificationsInput;

    @Field(() => AuthorCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutNotificationsInput)
    create!: AuthorCreateWithoutNotificationsInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;
}
