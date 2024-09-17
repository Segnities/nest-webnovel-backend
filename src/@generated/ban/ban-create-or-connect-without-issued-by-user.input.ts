import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanCreateWithoutIssuedByUserInput } from './ban-create-without-issued-by-user.input';

@InputType()
export class BanCreateOrConnectWithoutIssuedByUserInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanCreateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => BanCreateWithoutIssuedByUserInput)
    create!: BanCreateWithoutIssuedByUserInput;
}
