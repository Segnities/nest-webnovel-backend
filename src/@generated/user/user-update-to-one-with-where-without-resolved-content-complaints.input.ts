import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutResolvedContentComplaintsInput } from './user-update-without-resolved-content-complaints.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutResolvedContentComplaintsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutResolvedContentComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutResolvedContentComplaintsInput)
    data!: UserUpdateWithoutResolvedContentComplaintsInput;
}
