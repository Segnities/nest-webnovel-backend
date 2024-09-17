import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutNotificationsInput } from './review-create-without-notifications.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutNotificationsInput } from './review-create-or-connect-without-notifications.input';
import { ReviewUpsertWithoutNotificationsInput } from './review-upsert-without-notifications.input';
import { ReviewWhereInput } from './review-where.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateToOneWithWhereWithoutNotificationsInput } from './review-update-to-one-with-where-without-notifications.input';

@InputType()
export class ReviewUpdateOneWithoutNotificationsNestedInput {

    @Field(() => ReviewCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutNotificationsInput)
    create?: ReviewCreateWithoutNotificationsInput;

    @Field(() => ReviewCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutNotificationsInput;

    @Field(() => ReviewUpsertWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewUpsertWithoutNotificationsInput)
    upsert?: ReviewUpsertWithoutNotificationsInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    disconnect?: ReviewWhereInput;

    @Field(() => ReviewWhereInput, {nullable:true})
    @Type(() => ReviewWhereInput)
    delete?: ReviewWhereInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateToOneWithWhereWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewUpdateToOneWithWhereWithoutNotificationsInput)
    update?: ReviewUpdateToOneWithWhereWithoutNotificationsInput;
}
