import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Provider } from './provider.enum';
import { NestedEnumProviderWithAggregatesFilter } from './nested-enum-provider-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProviderFilter } from './nested-enum-provider-filter.input';

@InputType()
export class EnumProviderWithAggregatesFilter {

    @Field(() => Provider, {nullable:true})
    equals?: keyof typeof Provider;

    @Field(() => [Provider], {nullable:true})
    in?: Array<keyof typeof Provider>;

    @Field(() => [Provider], {nullable:true})
    notIn?: Array<keyof typeof Provider>;

    @Field(() => NestedEnumProviderWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProviderWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProviderFilter, {nullable:true})
    _min?: NestedEnumProviderFilter;

    @Field(() => NestedEnumProviderFilter, {nullable:true})
    _max?: NestedEnumProviderFilter;
}
