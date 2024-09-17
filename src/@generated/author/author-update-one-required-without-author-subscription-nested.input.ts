import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorSubscriptionInput } from './author-create-without-author-subscription.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutAuthorSubscriptionInput } from './author-create-or-connect-without-author-subscription.input';
import { AuthorUpsertWithoutAuthorSubscriptionInput } from './author-upsert-without-author-subscription.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateToOneWithWhereWithoutAuthorSubscriptionInput } from './author-update-to-one-with-where-without-author-subscription.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput {

    @Field(() => AuthorCreateWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorCreateWithoutAuthorSubscriptionInput)
    create?: AuthorCreateWithoutAuthorSubscriptionInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutAuthorSubscriptionInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorSubscriptionInput;

    @Field(() => AuthorUpsertWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutAuthorSubscriptionInput)
    upsert?: AuthorUpsertWithoutAuthorSubscriptionInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorUpdateToOneWithWhereWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => AuthorUpdateToOneWithWhereWithoutAuthorSubscriptionInput)
    update?: AuthorUpdateToOneWithWhereWithoutAuthorSubscriptionInput;
}
