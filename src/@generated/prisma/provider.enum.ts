import { registerEnumType } from '@nestjs/graphql';

export enum Provider {
    GOOGLE = "GOOGLE",
    EMAIL_AND_PASSWORD = "EMAIL_AND_PASSWORD"
}


registerEnumType(Provider, { name: 'Provider', description: undefined })
