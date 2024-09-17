import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutNewsInput } from './user-update-without-news.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutNewsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutNewsInput, {nullable:false})
    @Type(() => UserUpdateWithoutNewsInput)
    data!: UserUpdateWithoutNewsInput;
}
