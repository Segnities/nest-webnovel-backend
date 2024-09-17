import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Type } from 'class-transformer';
import { BanCreateWithoutUserInput } from './ban-create-without-user.input';

@InputType()
export class BanCreateOrConnectWithoutUserInput {

    @Field(() => BanWhereUniqueInput, {nullable:false})
    @Type(() => BanWhereUniqueInput)
    where!: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => BanCreateWithoutUserInput, {nullable:false})
    @Type(() => BanCreateWithoutUserInput)
    create!: BanCreateWithoutUserInput;
}
