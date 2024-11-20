import { Prisma } from "@prisma/client";

type SearchCategory = 'title' | 'author' | 'year' | 'all';

interface SearchParams {
   searchTerm?: string;
   page?: number;
   limit?: number;
   category?: SearchCategory;
   orderBy?: 'views' | 'releaseYear' | 'title';
   orderDirection?: 'asc' | 'desc';
}

function normalizeSearchTerm(term: string): string {
   return term?.toLowerCase().trim() ?? '';
}

function getOrderByClause(orderBy?: string, direction: 'asc' | 'desc' = 'desc'): Prisma.NovelOrderByWithRelationInput {
   switch (orderBy) {
      case 'releaseYear':
         return { releaseYear: direction };
      case 'title':
         return { title: direction };
      case 'views':
      default:
         return { views: direction };
   }
}

function buildTitleSearchCondition(searchTerm: string): Prisma.NovelWhereInput {
   const normalizedTerm = normalizeSearchTerm(searchTerm);
   const terms = normalizedTerm.split(' ').filter(term => term.length > 0);

   return {
      OR: [
         { title: { contains: normalizedTerm, mode: 'insensitive' } },
         { AND: terms.map(term => ({ title: { contains: term, mode: 'insensitive' } })) },
         {
            alternativeTitles: {
               some: {
                  OR: [
                     { title: { contains: normalizedTerm, mode: 'insensitive' } },
                     { AND: terms.map(term => ({ title: { contains: term, mode: 'insensitive' } })) },
                  ],
               },
            },
         },
      ],
   };
}

function buildAuthorSearchCondition(authorName: string): Prisma.NovelWhereInput {
   const normalizedName = normalizeSearchTerm(authorName);
   const terms = normalizedName.split(' ').filter(term => term.length > 0);

   return {
      OR: [
         { author: { name: { contains: normalizedName, mode: 'insensitive' } } },
         { AND: terms.map(term => ({ author: { name: { contains: term, mode: 'insensitive' } } })) },
      ],
   };
}

function buildYearSearchCondition(year: string | number): Prisma.NovelWhereInput {
   const releaseYear = Number(year);
   return {
      releaseYear,
   };
}

function buildCombinedSearchCondition(params: SearchParams): Prisma.NovelWhereInput {
   const conditions: Prisma.NovelWhereInput[] = [];

   if (params.searchTerm) {
      if (params.category === 'title' || params.category === 'all') {
         conditions.push(buildTitleSearchCondition(params.searchTerm));
      }
      if (params.category === 'author' || params.category === 'all') {
         conditions.push(buildAuthorSearchCondition(params.searchTerm));
      }
   }

   if (params.searchTerm && (params.category === 'year' || params.category === 'all')) {
      conditions.push(buildYearSearchCondition(params.searchTerm));
   }

   return conditions.length > 0 ? { OR: conditions } : {};
}

export {
   getOrderByClause,
   buildTitleSearchCondition,
   buildAuthorSearchCondition,
   buildYearSearchCondition,
   buildCombinedSearchCondition,
   SearchParams
};