import { Document } from 'mongoose';
export type EventStatus = 'new' | 'in_progress' | 'agreed' | 'done';
export type EventPriority = 'low' | 'normal' | 'high';
export declare class Event extends Document {
    date: Date;
    time?: string;
    title: string;
    additional_title?: string[];
    description?: string;
    communicants?: number;
    parishioners?: number;
    other?: string;
    status: EventStatus;
    priority: EventPriority;
    titleColor?: string;
    additionalTitleColor?: string;
    descriptionColor?: string;
    otherColor?: string;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event, any, {}> & Event & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Event> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
