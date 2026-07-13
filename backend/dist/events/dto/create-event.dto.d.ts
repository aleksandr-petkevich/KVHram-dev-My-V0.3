import { EventStatus, EventPriority } from '../schemas/event.schema';
export declare class CreateEventDto {
    date: Date;
    time?: string;
    title: string;
    additional_title?: string[];
    description?: string;
    communicants?: number;
    parishioners?: number;
    other?: string;
    status?: EventStatus;
    priority?: EventPriority;
    titleColor?: string;
    additionalTitleColor?: string;
    descriptionColor?: string;
    otherColor?: string;
}
