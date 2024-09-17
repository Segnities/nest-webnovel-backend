import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutTeamInput } from '../user/user-unchecked-create-nested-many-without-team.input';

@InputType()
export class TeamUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    chapters_count?: number;

    @Field(() => Int, {nullable:true})
    books_count?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutTeamInput;
}
