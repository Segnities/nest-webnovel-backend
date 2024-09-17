import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateWithoutIssuedByUserInput } from './content-complaint-create-without-issued-by-user.input';

@InputType()
export class ContentComplaintCreateOrConnectWithoutIssuedByUserInput {

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:false})
    @Type(() => ContentComplaintWhereUniqueInput)
    where!: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => ContentComplaintCreateWithoutIssuedByUserInput, {nullable:false})
    @Type(() => ContentComplaintCreateWithoutIssuedByUserInput)
    create!: ContentComplaintCreateWithoutIssuedByUserInput;
}
