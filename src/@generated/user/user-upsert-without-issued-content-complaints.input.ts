import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutIssuedContentComplaintsInput } from './user-update-without-issued-content-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutIssuedContentComplaintsInput } from './user-create-without-issued-content-complaints.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutIssuedContentComplaintsInput {

    @Field(() => UserUpdateWithoutIssuedContentComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutIssuedContentComplaintsInput)
    update!: UserUpdateWithoutIssuedContentComplaintsInput;

    @Field(() => UserCreateWithoutIssuedContentComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutIssuedContentComplaintsInput)
    create!: UserCreateWithoutIssuedContentComplaintsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
