import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateManyComplaintTargetTypeInput } from './ban-create-many-complaint-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class BanCreateManyComplaintTargetTypeInputEnvelope {

    @Field(() => [BanCreateManyComplaintTargetTypeInput], {nullable:false})
    @Type(() => BanCreateManyComplaintTargetTypeInput)
    data!: Array<BanCreateManyComplaintTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
