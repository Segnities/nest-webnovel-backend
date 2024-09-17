import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanUpdateWithoutComplaintTargetTypeInput } from './ban-update-without-complaint-target-type.input';
import { BanCreateWithoutComplaintTargetTypeInput } from './ban-create-without-complaint-target-type.input';

@InputType()
export class BanUpsertWithWhereUniqueWithoutComplaintTargetTypeInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanUpdateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => BanUpdateWithoutComplaintTargetTypeInput)
    update!: BanUpdateWithoutComplaintTargetTypeInput;

    @Field(() => BanCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => BanCreateWithoutComplaintTargetTypeInput)
    create!: BanCreateWithoutComplaintTargetTypeInput;
}
