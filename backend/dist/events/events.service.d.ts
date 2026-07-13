import { Model } from 'mongoose';
import { Event, EventStatus, EventPriority } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<Event>);
    create(createEventDto: CreateEventDto): Promise<Event>;
    findAll(page?: number, limit?: number, status?: EventStatus, priority?: EventPriority, searchDate?: string, searchTitle?: string, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<{
        events: Event[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<Event>;
    remove(id: string): Promise<void>;
    findByDateRange(startDate: string, endDate: string): Promise<Event[]>;
}
