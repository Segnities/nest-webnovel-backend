import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingUpdateManyMutationInput } from './continue-reading-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContinueReadingWhereInput } from './continue-reading-where.input';

@ArgsType()
export class UpdateManyContinueReadingArgs {

    @Field(() => ContinueReadingUpdateManyMutationInput, {nullable:false})
    @Type(() => ContinueReadingUpdateManyMutationInput)
    data!: ContinueReadingUpdateManyMutationInput;

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    @Type(() => ContinueReadingWhereInput)
    where?: ContinueReadingWhereInput;
}
