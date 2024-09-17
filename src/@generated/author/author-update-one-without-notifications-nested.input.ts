import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutNotificationsInput } from './author-create-without-notifications.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutNotificationsInput } from './author-create-or-connect-without-notifications.input';
import { AuthorUpsertWithoutNotificationsInput } from './author-upsert-without-notifications.input';
import { AuthorWhereInput } from './author-where.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateToOneWithWhereWithoutNotificationsInput } from './author-update-to-one-with-where-without-notifications.input';

@InputType()
export class AuthorUpdateOneWithoutNotificationsNestedInput {

    @Field(() => AuthorCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutNotificationsInput)
    create?: AuthorCreateWithoutNotificationsInput;

    @Field(() => AuthorCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutNotificationsInput;

    @Field(() => AuthorUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutNotificationsInput)
    upsert?: AuthorUpsertWithoutNotificationsInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    disconnect?: AuthorWhereInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    delete?: AuthorWhereInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => AuthorUpdateToOneWithWhereWithoutNotificationsInput)
    update?: AuthorUpdateToOneWithWhereWithoutNotificationsInput;
}
