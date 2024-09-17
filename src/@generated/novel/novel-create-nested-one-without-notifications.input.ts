import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNotificationsInput } from './novel-create-without-notifications.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNotificationsInput } from './novel-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutNotificationsInput {

    @Field(() => NovelCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelCreateWithoutNotificationsInput)
    create?: NovelCreateWithoutNotificationsInput;

    @Field(() => NovelCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNotificationsInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
