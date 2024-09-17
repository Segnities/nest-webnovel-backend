import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanCreateManyInput } from './ban-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBanArgs {

    @Field(() => [BanCreateManyInput], {nullable:false})
    @Type(() => BanCreateManyInput)
    data!: Array<BanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
