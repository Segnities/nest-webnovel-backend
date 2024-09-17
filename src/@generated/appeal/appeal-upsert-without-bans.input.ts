import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealUpdateWithoutBansInput } from './appeal-update-without-bans.input';
import { Type } from 'class-transformer';
import { AppealCreateWithoutBansInput } from './appeal-create-without-bans.input';
import { AppealWhereInput } from './appeal-where.input';

@InputType()
export class AppealUpsertWithoutBansInput {

    @Field(() => AppealUpdateWithoutBansInput, {nullable:false})
    @Type(() => AppealUpdateWithoutBansInput)
    update!: AppealUpdateWithoutBansInput;

    @Field(() => AppealCreateWithoutBansInput, {nullable:false})
    @Type(() => AppealCreateWithoutBansInput)
    create!: AppealCreateWithoutBansInput;

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;
}
