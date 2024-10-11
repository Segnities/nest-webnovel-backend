
import * as fs from 'fs/promises';
import * as path from "path";

export async function deleteLocalImages(imagePaths: string[]): Promise<void> {
   for (const imagePath of imagePaths) {
      try {
         await fs.unlink(path.join(__dirname, '..', '..', imagePath));
         console.log(`Successfully deleted local image: ${imagePath}`);
      } catch (deleteError) {
         console.error(`Failed to delete local image ${imagePath}:`, deleteError);
      }
   }
}