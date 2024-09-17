import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppealCreateNestedOneWithoutBansInput } from '../appeal/appeal-create-nested-one-without-bans.input';
import { UserCreateNestedOneWithoutIssuedBansInput } from '../user/user-create-nested-one-without-issued-bans.input';
import { UserCreateNestedOneWithoutUserBansInput } from '../user/user-create-nested-one-without-user-bans.input';
import { ComplaintTargetTypeCreateNestedOneWithoutBansInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-bans.input';

@InputType()
export class BanCreateInput {

    @Field(() => Date, {nullable:true})
    banStart?: Date | string;

    @Field(() => Date, {nullable:false})
    banEnd!: Date | string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Boolean, {nullable:true})
    appealed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AppealCreateNestedOneWithoutBansInput, {nullable:false})
    appeal!: AppealCreateNestedOneWithoutBansInput;

    @Field(() => UserCreateNestedOneWithoutIssuedBansInput, {nullable:false})
    issuedByUser!: UserCreateNestedOneWithoutIssuedBansInput;

    @Field(() => UserCreateNestedOneWithoutUserBansInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserBansInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutBansInput, {nullable:false})
    complaintTargetType!: ComplaintTargetTypeCreateNestedOneWithoutBansInput;
}
