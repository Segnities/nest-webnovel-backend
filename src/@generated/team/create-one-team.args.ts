import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamCreateInput } from './team-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTeamArgs {

    @Field(() => TeamCreateInput, {nullable:false})
    @Type(() => TeamCreateInput)
    data!: TeamCreateInput;
}
