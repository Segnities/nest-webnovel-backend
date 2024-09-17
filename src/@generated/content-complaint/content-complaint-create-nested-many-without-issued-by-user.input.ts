import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutIssuedByUserInput } from './content-complaint-create-without-issued-by-user.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutIssuedByUserInput } from './content-complaint-create-or-connect-without-issued-by-user.input';
import { ContentComplaintCreateManyIssuedByUserInputEnvelope } from './content-complaint-create-many-issued-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';

@InputType()
export class ContentComplaintCreateNestedManyWithoutIssuedByUserInput {

    @Field(() => [ContentComplaintCreateWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutIssuedByUserInput)
    create?: Array<ContentComplaintCreateWithoutIssuedByUserInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutIssuedByUserInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutIssuedByUserInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutIssuedByUserInput>;

    @Field(() => ContentComplaintCreateManyIssuedByUserInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyIssuedByUserInputEnvelope)
    createMany?: ContentComplaintCreateManyIssuedByUserInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;
}
