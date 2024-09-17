import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutComplaintReasonInput } from './content-complaint-create-without-complaint-reason.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutComplaintReasonInput } from './content-complaint-create-or-connect-without-complaint-reason.input';
import { ContentComplaintCreateManyComplaintReasonInputEnvelope } from './content-complaint-create-many-complaint-reason-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';

@InputType()
export class ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput {

    @Field(() => [ContentComplaintCreateWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutComplaintReasonInput)
    create?: Array<ContentComplaintCreateWithoutComplaintReasonInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutComplaintReasonInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutComplaintReasonInput>;

    @Field(() => ContentComplaintCreateManyComplaintReasonInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyComplaintReasonInputEnvelope)
    createMany?: ContentComplaintCreateManyComplaintReasonInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;
}
