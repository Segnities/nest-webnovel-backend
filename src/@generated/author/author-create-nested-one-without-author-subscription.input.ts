import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorSubscriptionInput } from './author-create-without-author-subscription.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutAuthorSubscriptionInput } from './author-create-or-connect-without-author-subscription.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutAuthorSubscriptionInput {

    @Field(() => AuthorCreateWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorCreateWithoutAuthorSubscriptionInput)
    create?: AuthorCreateWithoutAuthorSubscriptionInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutAuthorSubscriptionInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorSubscriptionInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;
}
