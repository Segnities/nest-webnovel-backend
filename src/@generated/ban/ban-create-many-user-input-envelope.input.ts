import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateManyUserInput } from './ban-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BanCreateManyUserInputEnvelope {

    @Field(() => [BanCreateManyUserInput], {nullable:false})
    @Type(() => BanCreateManyUserInput)
    data!: Array<BanCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
