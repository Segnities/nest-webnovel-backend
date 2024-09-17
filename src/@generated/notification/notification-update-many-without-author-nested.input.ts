import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutAuthorInput } from './notification-create-without-author.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutAuthorInput } from './notification-create-or-connect-without-author.input';
import { NotificationUpsertWithWhereUniqueWithoutAuthorInput } from './notification-upsert-with-where-unique-without-author.input';
import { NotificationCreateManyAuthorInputEnvelope } from './notification-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutAuthorInput } from './notification-update-with-where-unique-without-author.input';
import { NotificationUpdateManyWithWhereWithoutAuthorInput } from './notification-update-many-with-where-without-author.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUpdateManyWithoutAuthorNestedInput {

    @Field(() => [NotificationCreateWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationCreateWithoutAuthorInput)
    create?: Array<NotificationCreateWithoutAuthorInput>;

    @Field(() => [NotificationCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutAuthorInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => NotificationCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyAuthorInputEnvelope)
    createMany?: NotificationCreateManyAuthorInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
