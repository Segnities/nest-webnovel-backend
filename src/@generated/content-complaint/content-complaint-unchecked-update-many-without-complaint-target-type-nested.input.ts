import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateWithoutComplaintTargetTypeInput } from './content-complaint-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput } from './content-complaint-create-or-connect-without-complaint-target-type.input';
import { ContentComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput } from './content-complaint-upsert-with-where-unique-without-complaint-target-type.input';
import { ContentComplaintCreateManyComplaintTargetTypeInputEnvelope } from './content-complaint-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { ContentComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput } from './content-complaint-update-with-where-unique-without-complaint-target-type.input';
import { ContentComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput } from './content-complaint-update-many-with-where-without-complaint-target-type.input';
import { ContentComplaintScalarWhereInput } from './content-complaint-scalar-where.input';

@InputType()
export class ContentComplaintUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput {

    @Field(() => [ContentComplaintCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintCreateWithoutComplaintTargetTypeInput)
    create?: Array<ContentComplaintCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<ContentComplaintCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => [ContentComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput)
    upsert?: Array<ContentComplaintUpsertWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => ContentComplaintCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ContentComplaintCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: ContentComplaintCreateManyComplaintTargetTypeInputEnvelope;

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

    @Field(() => [ContentComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput)
    update?: Array<ContentComplaintUpdateWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => [ContentComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => ContentComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput)
    updateMany?: Array<ContentComplaintUpdateManyWithWhereWithoutComplaintTargetTypeInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    @Type(() => ContentComplaintScalarWhereInput)
    deleteMany?: Array<ContentComplaintScalarWhereInput>;
}
