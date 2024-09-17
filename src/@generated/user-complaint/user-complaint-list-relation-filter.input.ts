import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintWhereInput } from './user-complaint-where.input';

@InputType()
export class UserComplaintListRelationFilter {

    @Field(() => UserComplaintWhereInput, {nullable:true})
    every?: UserComplaintWhereInput;

    @Field(() => UserComplaintWhereInput, {nullable:true})
    some?: UserComplaintWhereInput;

    @Field(() => UserComplaintWhereInput, {nullable:true})
    none?: UserComplaintWhereInput;
}
