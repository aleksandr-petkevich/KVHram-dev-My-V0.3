import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventStatus = 'new' | 'in_progress' | 'agreed' | 'done';
export type EventPriority = 'low' | 'normal' | 'high';

@Schema({ timestamps: true })
export class Event extends Document {
    @Prop({ required: true })
    date: Date;

    @Prop({ required: false })
    time?: string;

    @Prop({ required: true, minlength: 3, maxlength: 100 })
    title: string;

    @Prop({ type: [String] })
    additional_title?: string[];

    @Prop({ maxlength: 500 })
    description?: string;

    @Prop({ type: Number })
    communicants?: number;

    @Prop({ type: Number })
    parishioners?: number;

    @Prop({ maxlength: 1000 })
    other?: string;

    @Prop({ type: String, enum: ['new', 'in_progress', 'agreed', 'done'], default: 'new' })
    status: EventStatus;

    @Prop({ type: String, enum: ['low', 'normal', 'high'], default: 'normal' })
    priority: EventPriority;

    @Prop({ type: String })
    titleColor?: string;

    @Prop({ type: String })
    additionalTitleColor?: string;

    @Prop({ type: String })
    descriptionColor?: string;

    @Prop({ type: String })
    otherColor?: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);