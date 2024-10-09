import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import * as path from 'path';

@Injectable()
export class CloudinaryService {
   async uploadImage(imagePath: string): Promise<UploadApiResponse | UploadApiErrorResponse> {
      const publicId = path.basename(imagePath.replace('.webp', ''));
      const image = path.join(process.cwd(), imagePath);
      const response = await cloudinary.uploader.upload(image, {
         resource_type: "image",
         public_id: publicId
      })
      return response;
   }
}
