import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanUpdateWithoutAppealInput } from './ban-update-without-appeal.input';

@InputType()
export class BanUpdateWithWhereUniqueWithoutAppealInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanUpdateWithoutAppealInput, {nullable:false})
    @Type(() => BanUpdateWithoutAppealInput)
    data!: BanUpdateWithoutAppealInput;
}
