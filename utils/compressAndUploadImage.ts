import * as fs from 'fs';

export default function compressAndUploadImage(image: string, title: string): string {
  try {
    const imageBuffer = Buffer.from(image, 'base64');
    const imageName = `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-${image.split('/').pop()}`;
    const imagePath = `./uploads/${imageName}`;
    fs.writeFileSync(imagePath, imageBuffer);

    return imagePath;
  } catch (error) {
    throw error;
  }
}
