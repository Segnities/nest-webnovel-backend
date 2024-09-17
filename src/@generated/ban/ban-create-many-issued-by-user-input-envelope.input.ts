import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateManyIssuedByUserInput } from './ban-create-many-issued-by-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BanCreateManyIssuedByUserInputEnvelope {

    @Field(() => [BanCreateManyIssuedByUserInput], {nullable:false})
    @Type(() => BanCreateManyIssuedByUserInput)
    data!: Array<BanCreateManyIssuedByUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
