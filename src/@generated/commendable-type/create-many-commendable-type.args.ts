import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommendableTypeCreateManyInput } from './commendable-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommendableTypeArgs {

    @Field(() => [CommendableTypeCreateManyInput], {nullable:false})
    @Type(() => CommendableTypeCreateManyInput)
    data!: Array<CommendableTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
