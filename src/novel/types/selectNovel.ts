import { Prisma } from "@prisma/client";

const selectMinimalNovelSetup: Prisma.NovelSelect = {
   id: true,
   title: true,
   slug: true,
   country: {
      select: { title: true },
   },
   img: true,
};




export { selectMinimalNovelSetup };