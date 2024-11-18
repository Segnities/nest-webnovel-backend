import * as admin from 'firebase-admin';
import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class FirebaseAdminService implements OnApplicationBootstrap {
  private readonly logger = new Logger(FirebaseAdminService.name);

  onApplicationBootstrap() {
    try {
      const serviceAccountPath = path.join(process.cwd(), 'serviceAccountKey.json');
      
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccountPath),
        });
        this.logger.log('Firebase Admin initialized successfully');
      }
    } catch (error) {
      this.logger.error('Failed to initialize Firebase Admin:', error);
      throw error;
    }
  }

  getAdmin() {
    return admin;
  }
}