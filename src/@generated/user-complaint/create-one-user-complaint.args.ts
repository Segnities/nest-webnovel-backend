import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintCreateInput } from './user-complaint-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserComplaintArgs {

    @Field(() => UserComplaintCreateInput, {nullable:false})
    @Type(() => UserComplaintCreateInput)
    data!: UserComplaintCreateInput;
}
