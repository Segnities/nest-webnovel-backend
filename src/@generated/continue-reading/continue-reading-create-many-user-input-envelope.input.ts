import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateManyUserInput } from './continue-reading-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ContinueReadingCreateManyUserInputEnvelope {

    @Field(() => [ContinueReadingCreateManyUserInput], {nullable:false})
    @Type(() => ContinueReadingCreateManyUserInput)
    data!: Array<ContinueReadingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
