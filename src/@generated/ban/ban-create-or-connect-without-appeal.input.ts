import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanCreateWithoutAppealInput } from './ban-create-without-appeal.input';

@InputType()
export class BanCreateOrConnectWithoutAppealInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanCreateWithoutAppealInput, {nullable:false})
    @Type(() => BanCreateWithoutAppealInput)
    create!: BanCreateWithoutAppealInput;
}
