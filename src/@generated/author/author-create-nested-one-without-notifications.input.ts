import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutNotificationsInput } from './author-create-without-notifications.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutNotificationsInput } from './author-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutNotificationsInput {

    @Field(() => AuthorCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutNotificationsInput)
    create?: AuthorCreateWithoutNotificationsInput;

    @Field(() => AuthorCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutNotificationsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;
}
