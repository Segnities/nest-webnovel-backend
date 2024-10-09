import * as sharp from 'sharp';
import * as path from 'path';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

interface Image {
  imageUrl: string;
  title: string;
  width: number;
  height: number;
}

export default async function compressAndUploadImage(
  image: Image,
): Promise<string> {
  try {
    if (!image.imageUrl || typeof image.imageUrl !== 'string') {
      throw new Error('Invalid image URL');
    }
    console.log(image.imageUrl);
    const encodedUrl = encodeURI(image.imageUrl);
    console.log(encodedUrl);
    const response = await axios.get(encodedUrl, {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'image/*',
      },
    });
    const imageBuffer = Buffer.from(response.data, 'binary');
    const imageName = `${image.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.webp`;
    const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
    const imagePath = path.join(uploadsDir, imageName);

    await sharp(imageBuffer)
      .webp({ quality: 90 })
      .resize(image.width, image.height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toFile(imagePath);

    return `/uploads/${imageName}`;
  } catch (error) {
    console.error('Error compressing and uploading image:', error.message);
    console.error('Image URL:', image.imageUrl);
    throw error;
  }
}
