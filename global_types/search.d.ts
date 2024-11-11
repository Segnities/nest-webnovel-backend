export interface SearchResponse {
   data: any[];
   pagination: {
     total: number;
     page: number;
     limit: number;
     totalPages: number;
   };
 }