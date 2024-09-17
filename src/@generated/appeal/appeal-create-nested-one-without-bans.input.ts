import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutBansInput } from './appeal-create-without-bans.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutBansInput } from './appeal-create-or-connect-without-bans.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';

@InputType()
export class AppealCreateNestedOneWithoutBansInput {

    @Field(() => AppealCreateWithoutBansInput, {nullable:true})
    @Type(() => AppealCreateWithoutBansInput)
    create?: AppealCreateWithoutBansInput;

    @Field(() => AppealCreateOrConnectWithoutBansInput, {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutBansInput)
    connectOrCreate?: AppealCreateOrConnectWithoutBansInput;

    @Field(() => AppealWhereUniqueInput, {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    connect?: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;
}
