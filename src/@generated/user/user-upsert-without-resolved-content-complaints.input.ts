import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutResolvedContentComplaintsInput } from './user-update-without-resolved-content-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResolvedContentComplaintsInput } from './user-create-without-resolved-content-complaints.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutResolvedContentComplaintsInput {

    @Field(() => UserUpdateWithoutResolvedContentComplaintsInput, {nullable:false})
    @Type(() => UserUpdateWithoutResolvedContentComplaintsInput)
    update!: UserUpdateWithoutResolvedContentComplaintsInput;

    @Field(() => UserCreateWithoutResolvedContentComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutResolvedContentComplaintsInput)
    create!: UserCreateWithoutResolvedContentComplaintsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
