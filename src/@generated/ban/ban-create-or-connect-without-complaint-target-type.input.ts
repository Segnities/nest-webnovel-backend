import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanCreateWithoutComplaintTargetTypeInput } from './ban-create-without-complaint-target-type.input';

@InputType()
export class BanCreateOrConnectWithoutComplaintTargetTypeInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanCreateWithoutComplaintTargetTypeInput, {nullable:false})
    @Type(() => BanCreateWithoutComplaintTargetTypeInput)
    create!: BanCreateWithoutComplaintTargetTypeInput;
}
