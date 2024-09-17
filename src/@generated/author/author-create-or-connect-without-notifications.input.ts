import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutNotificationsInput } from './author-create-without-notifications.input';

@InputType()
export class AuthorCreateOrConnectWithoutNotificationsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutNotificationsInput)
    create!: AuthorCreateWithoutNotificationsInput;
}
