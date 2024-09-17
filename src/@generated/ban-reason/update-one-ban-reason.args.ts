import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonUpdateInput } from './ban-reason-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BanReasonWhereUniqueInput } from './ban-reason-where-unique.input';

@ArgsType()
export class UpdateOneBanReasonArgs {

    @Field(() => BanReasonUpdateInput, {nullable:false})
    @Type(() => BanReasonUpdateInput)
    data!: BanReasonUpdateInput;

    @Field(() => BanReasonWhereUniqueInput, {nullable:false})
    @Type(() => BanReasonWhereUniqueInput)
    where!: Prisma.AtLeast<BanReasonWhereUniqueInput, 'id'>;
}
