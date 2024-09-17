import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNotificationsInput } from './novel-create-without-notifications.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNotificationsInput } from './novel-create-or-connect-without-notifications.input';
import { NovelUpsertWithoutNotificationsInput } from './novel-upsert-without-notifications.input';
import { NovelWhereInput } from './novel-where.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutNotificationsInput } from './novel-update-to-one-with-where-without-notifications.input';

@InputType()
export class NovelUpdateOneWithoutNotificationsNestedInput {

    @Field(() => NovelCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelCreateWithoutNotificationsInput)
    create?: NovelCreateWithoutNotificationsInput;

    @Field(() => NovelCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNotificationsInput;

    @Field(() => NovelUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelUpsertWithoutNotificationsInput)
    upsert?: NovelUpsertWithoutNotificationsInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    disconnect?: NovelWhereInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    delete?: NovelWhereInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutNotificationsInput)
    update?: NovelUpdateToOneWithWhereWithoutNotificationsInput;
}
