import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';
import { Type } from 'class-transformer';
import { ContentComplaintOrderByWithRelationInput } from './content-complaint-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContentComplaintScalarFieldEnum } from './content-complaint-scalar-field.enum';

@ArgsType()
export class FindFirstContentComplaintOrThrowArgs {

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    @Type(() => ContentComplaintWhereInput)
    where?: ContentComplaintWhereInput;

    @Field(() => [ContentComplaintOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContentComplaintOrderByWithRelationInput>;

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContentComplaintScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ContentComplaintScalarFieldEnum>;
}
