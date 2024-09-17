import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutAuthorInput } from './notification-create-without-author.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutAuthorInput } from './notification-create-or-connect-without-author.input';
import { NotificationCreateManyAuthorInputEnvelope } from './notification-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedManyWithoutAuthorInput {

    @Field(() => [NotificationCreateWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationCreateWithoutAuthorInput)
    create?: Array<NotificationCreateWithoutAuthorInput>;

    @Field(() => [NotificationCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutAuthorInput>;

    @Field(() => NotificationCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyAuthorInputEnvelope)
    createMany?: NotificationCreateManyAuthorInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
