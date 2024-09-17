import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyTeamInput } from './user-create-many-team.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyTeamInputEnvelope {

    @Field(() => [UserCreateManyTeamInput], {nullable:false})
    @Type(() => UserCreateManyTeamInput)
    data!: Array<UserCreateManyTeamInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
