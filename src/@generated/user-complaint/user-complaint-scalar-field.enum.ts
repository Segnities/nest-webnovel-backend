import { registerEnumType } from '@nestjs/graphql';

export enum UserComplaintScalarFieldEnum {
    id = "id",
    status = "status",
    createdAt = "createdAt",
    reasonId = "reasonId",
    userId = "userId",
    complaintTargetId = "complaintTargetId"
}


registerEnumType(UserComplaintScalarFieldEnum, { name: 'UserComplaintScalarFieldEnum', description: undefined })
