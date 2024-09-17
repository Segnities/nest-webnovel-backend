import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereInput } from './team-where.input';
import { Type } from 'class-transformer';
import { TeamUpdateWithoutUsersInput } from './team-update-without-users.input';

@InputType()
export class TeamUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;

    @Field(() => TeamUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TeamUpdateWithoutUsersInput)
    data!: TeamUpdateWithoutUsersInput;
}
