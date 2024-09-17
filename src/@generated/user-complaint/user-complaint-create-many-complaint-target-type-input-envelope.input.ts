import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateManyComplaintTargetTypeInput } from './user-complaint-create-many-complaint-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class UserComplaintCreateManyComplaintTargetTypeInputEnvelope {

    @Field(() => [UserComplaintCreateManyComplaintTargetTypeInput], {nullable:false})
    @Type(() => UserComplaintCreateManyComplaintTargetTypeInput)
    data!: Array<UserComplaintCreateManyComplaintTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
