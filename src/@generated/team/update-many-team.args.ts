import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamUpdateManyMutationInput } from './team-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TeamWhereInput } from './team-where.input';

@ArgsType()
export class UpdateManyTeamArgs {

    @Field(() => TeamUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamUpdateManyMutationInput)
    data!: TeamUpdateManyMutationInput;

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;
}
