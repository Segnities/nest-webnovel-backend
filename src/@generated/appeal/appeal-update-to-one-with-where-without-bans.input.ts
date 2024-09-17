import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';
import { Type } from 'class-transformer';
import { AppealUpdateWithoutBansInput } from './appeal-update-without-bans.input';

@InputType()
export class AppealUpdateToOneWithWhereWithoutBansInput {

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;

    @Field(() => AppealUpdateWithoutBansInput, {nullable:false})
    @Type(() => AppealUpdateWithoutBansInput)
    data!: AppealUpdateWithoutBansInput;
}
