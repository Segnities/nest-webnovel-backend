import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintCreateManyInput } from './user-complaint-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserComplaintArgs {

    @Field(() => [UserComplaintCreateManyInput], {nullable:false})
    @Type(() => UserComplaintCreateManyInput)
    data!: Array<UserComplaintCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
