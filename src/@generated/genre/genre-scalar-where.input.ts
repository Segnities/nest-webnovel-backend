import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class GenreScalarWhereInput {

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    AND?: Array<GenreScalarWhereInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    OR?: Array<GenreScalarWhereInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    NOT?: Array<GenreScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;
}
