import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanReasonWhereUniqueInput } from './ban-reason-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBanReasonArgs {

    @Field(() => BanReasonWhereUniqueInput, {nullable:false})
    @Type(() => BanReasonWhereUniqueInput)
    where!: Prisma.AtLeast<BanReasonWhereUniqueInput, 'id'>;
}
