import { NovelStatus, NovelFormat, NovelTranslationStatus } from '../types/index';
import { Country } from '@/country/model/country.model';
export declare class Novel {
    id: number;
    title: string;
    original_title?: string;
    description: string;
    img: string;
    isAdult: boolean;
    releaseYear?: number;
    coverImg?: string;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    country: Country;
    status: NovelStatus;
    author: Author;
    translationStatus: NovelTranslationStatus;
    format: NovelFormat;
    commendableType: CommendableType;
    tags: Tag[];
    genres: Genre[];
    alternativeTitles: AlternativeTitle[];
    chapters: Chapter[];
    reviews: Review[];
    novelRating?: NovelRating;
    usersRatings: UserRating[];
    novelCollectionMapping: NovelCollectionMapping[];
    complainTargetType: ComplaintTargetType;
    continueReading: ContinueReading[];
    novelSubscription: NovelSubscription[];
    s: [];
}
