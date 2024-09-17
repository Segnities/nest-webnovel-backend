import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutReviewedByUserInput } from './appeal-create-without-reviewed-by-user.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutReviewedByUserInput } from './appeal-create-or-connect-without-reviewed-by-user.input';
import { AppealCreateManyReviewedByUserInputEnvelope } from './appeal-create-many-reviewed-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';

@InputType()
export class AppealCreateNestedManyWithoutReviewedByUserInput {

    @Field(() => [AppealCreateWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealCreateWithoutReviewedByUserInput)
    create?: Array<AppealCreateWithoutReviewedByUserInput>;

    @Field(() => [AppealCreateOrConnectWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutReviewedByUserInput)
    connectOrCreate?: Array<AppealCreateOrConnectWithoutReviewedByUserInput>;

    @Field(() => AppealCreateManyReviewedByUserInputEnvelope, {nullable:true})
    @Type(() => AppealCreateManyReviewedByUserInputEnvelope)
    createMany?: AppealCreateManyReviewedByUserInputEnvelope;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;
}
