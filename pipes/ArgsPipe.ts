import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ArgsPipe implements PipeTransform {
   transform(query: any) {
      const { take, skip, ...rest } = query;
      const transformedQuery = {
         ...rest,
         take: take ? this.parseIntValue(take, 'take') : undefined,
         skip: skip ? this.parseIntValue(skip, 'skip') : undefined,
      };

      return transformedQuery;
   }

   private parseIntValue(value: string, key: string): number {
      const parsed = parseInt(value, 10);
      if (isNaN(parsed)) {
         throw new BadRequestException(`Invalid value for parameter ${key}. Expected a number.`);
      }
      return parsed;
   }
}
