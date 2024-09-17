import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintWhereInput } from './user-complaint-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserComplaintArgs {

    @Field(() => UserComplaintWhereInput, {nullable:true})
    @Type(() => UserComplaintWhereInput)
    where?: UserComplaintWhereInput;
}
