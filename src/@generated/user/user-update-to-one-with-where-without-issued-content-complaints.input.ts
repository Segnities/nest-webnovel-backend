import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutIssuedContentComplaintsInput } from './user-update-without-issued-content-complaints.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutIssuedContentComplaintsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutIssuedContentComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutIssuedContentComplaintsInput)
    data!: UserUpdateWithoutIssuedContentComplaintsInput;
}
