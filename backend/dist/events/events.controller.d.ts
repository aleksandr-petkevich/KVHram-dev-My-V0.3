import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto, req: any): Promise<import("./schemas/event.schema").Event>;
    findAll(req: any, page?: string, limit?: string, status?: string, priority?: string, searchDate?: string, searchTitle?: string, sortBy?: string, sortOrder?: string): Promise<{
        events: import("./schemas/event.schema").Event[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findByDateRange(req: any, startDate: string, endDate: string, limit?: string): Promise<import("./schemas/event.schema").Event[]>;
    findOne(id: string, req: any): Promise<import("./schemas/event.schema").Event>;
    update(id: string, updateEventDto: UpdateEventDto, req: any): Promise<import("./schemas/event.schema").Event>;
    remove(id: string, req: any): Promise<void>;
}
