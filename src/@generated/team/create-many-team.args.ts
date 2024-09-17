import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamCreateManyInput } from './team-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTeamArgs {

    @Field(() => [TeamCreateManyInput], {nullable:false})
    @Type(() => TeamCreateManyInput)
    data!: Array<TeamCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
