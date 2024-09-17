import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateManyReasonInput } from './user-complaint-create-many-reason.input';
import { Type } from 'class-transformer';

@InputType()
export class UserComplaintCreateManyReasonInputEnvelope {

    @Field(() => [UserComplaintCreateManyReasonInput], {nullable:false})
    @Type(() => UserComplaintCreateManyReasonInput)
    data!: Array<UserComplaintCreateManyReasonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
