import { OnApplicationBootstrap } from '@nestjs/common';
import * as admin from 'firebase-admin';
export declare class FirebaseAdmin implements OnApplicationBootstrap {
    onApplicationBootstrap(): Promise<void>;
    setup(): admin.app.App;
}
