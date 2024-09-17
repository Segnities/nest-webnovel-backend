import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTeamArgs {

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;
}
