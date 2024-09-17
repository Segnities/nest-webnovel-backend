import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutComplaintReasonInput } from './content-complaint-create-without-complaint-reason.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutComplaintReasonInput } from './content-complaint-create-or-connect-without-complaint-reason.input';
import { ContentComplaintUpsertWithWhereUniqueWithoutComplaintReasonInput } from './content-complaint-upsert-with-where-unique-without-complaint-reason.input';
import { ContentComplaintCreateManyComplaintReasonInputEnvelope } from './content-complaint-create-many-complaint-reason-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { ContentComplaintUpdateWithWhereUniqueWithoutComplaintReasonInput } from './content-complaint-update-with-where-unique-without-complaint-reason.input';
import { ContentComplaintUpdateManyWithWhereWithoutComplaintReasonInput } from './content-complaint-update-many-with-where-without-complaint-reason.input';
import { ContentComplaintScalarWhereInput } from './content-complaint-scalar-where.input';

@InputType()
export class ContentComplaintUncheckedUpdateManyWithoutComplaintReasonNestedInput {

    @Field(() => [ContentComplaintCreateWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutComplaintReasonInput)
    create?: Array<ContentComplaintCreateWithoutComplaintReasonInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutComplaintReasonInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutComplaintReasonInput>;

    @Field(() => [ContentComplaintUpsertWithWhereUniqueWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintUpsertWithWhereUniqueWithoutComplaintReasonInput)
    upsert?: Array<ContentComplaintUpsertWithWhereUniqueWithoutComplaintReasonInput>;

    @Field(() => ContentComplaintCreateManyComplaintReasonInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyComplaintReasonInputEnvelope)
    createMany?: ContentComplaintCreateManyComplaintReasonInputEnvelope;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintWhereUniqueInput], {nullable:true})
    @Type(() => ContentComplaintWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>>;

    @Field(() => [ContentComplaintUpdateWithWhereUniqueWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintUpdateWithWhereUniqueWithoutComplaintReasonInput)
    update?: Array<ContentComplaintUpdateWithWhereUniqueWithoutComplaintReasonInput>;

    @Field(() => [ContentComplaintUpdateManyWithWhereWithoutComplaintReasonInput], {nullable:true})
    @Type(() => ContentComplaintUpdateManyWithWhereWithoutComplaintReasonInput)
    updateMany?: Array<ContentComplaintUpdateManyWithWhereWithoutComplaintReasonInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    @Type(() => ContentComplaintScalarWhereInput)
    deleteMany?: Array<ContentComplaintScalarWhereInput>;
}
