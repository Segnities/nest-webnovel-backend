import { registerEnumType } from '@nestjs/graphql';

export enum BanScalarFieldEnum {
    id = "id",
    banStart = "banStart",
    banEnd = "banEnd",
    duration = "duration",
    appealed = "appealed",
    appealId = "appealId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    issuedBy = "issuedBy",
    userId = "userId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(BanScalarFieldEnum, { name: 'BanScalarFieldEnum', description: undefined })
