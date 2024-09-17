import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamUpdateWithoutUsersInput } from './team-update-without-users.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutUsersInput } from './team-create-without-users.input';
import { TeamWhereInput } from './team-where.input';

@InputType()
export class TeamUpsertWithoutUsersInput {

    @Field(() => TeamUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TeamUpdateWithoutUsersInput)
    update!: TeamUpdateWithoutUsersInput;

    @Field(() => TeamCreateWithoutUsersInput, {nullable:false})
    @Type(() => TeamCreateWithoutUsersInput)
    create!: TeamCreateWithoutUsersInput;

    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: TeamWhereInput;
}
