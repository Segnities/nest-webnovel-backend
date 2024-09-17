import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutNotificationsInput } from './review-create-without-notifications.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutNotificationsInput } from './review-create-or-connect-without-notifications.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedOneWithoutNotificationsInput {

    @Field(() => ReviewCreateWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewCreateWithoutNotificationsInput)
    create?: ReviewCreateWithoutNotificationsInput;

    @Field(() => ReviewCreateOrConnectWithoutNotificationsInput, {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutNotificationsInput)
    connectOrCreate?: ReviewCreateOrConnectWithoutNotificationsInput;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;
}
