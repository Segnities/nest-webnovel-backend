import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintUpdateWithoutIssuedByUserInput } from './content-complaint-update-without-issued-by-user.input';
import { ContentComplaintCreateWithoutIssuedByUserInput } from './content-complaint-create-without-issued-by-user.input';

@InputType()
export class ContentComplaintUpsertWithWhereUniqueWithoutIssuedByUserInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintUpdateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => ContentComplaintUpdateWithoutIssuedByUserInput)
    update!: ContentComplaintUpdateWithoutIssuedByUserInput;

    @Field(() => ContentComplaintCreateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => ContentComplaintCreateWithoutIssuedByUserInput)
    create!: ContentComplaintCreateWithoutIssuedByUserInput;
}
