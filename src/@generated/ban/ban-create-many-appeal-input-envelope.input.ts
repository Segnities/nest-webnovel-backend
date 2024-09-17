import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateManyAppealInput } from './ban-create-many-appeal.input';
import { Type } from 'class-transformer';

@InputType()
export class BanCreateManyAppealInputEnvelope {

    @Field(() => [BanCreateManyAppealInput], {nullable:false})
    @Type(() => BanCreateManyAppealInput)
    data!: Array<BanCreateManyAppealInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
