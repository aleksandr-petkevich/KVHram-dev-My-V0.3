import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Event, EventStatus, EventPriority } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Event.name) private eventModel: Model<Event>) { }

    async create(createEventDto: CreateEventDto): Promise<Event> {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }

    async findAll(
        page: number = 1,
        limit: number = 10,
        status?: EventStatus,
        priority?: EventPriority,
        searchDate?: string,
        searchTitle?: string,
        sortBy: string = 'created_at',
        sortOrder: 'asc' | 'desc' = 'desc',
    ): Promise<{ events: Event[]; total: number; page: number; totalPages: number }> {
        const query: any = {};

        if (status) {
            query.status = status;
        }

        if (priority) {
            query.priority = priority;
        }

        if (searchDate) {
            const date = new Date(searchDate);
            const nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);
            query.date = { $gte: date, $lt: nextDay };
        }

        if (searchTitle) {
            query.title = { $regex: searchTitle, $options: 'i' };
        }

        const sort: any = {};
        if (sortBy === 'created_at' || sortBy === 'updated_at') {
            sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        } else if (sortBy === 'date') {
            sort.date = sortOrder === 'asc' ? 1 : -1;
        } else if (sortBy === 'status') {
            sort.status = sortOrder === 'asc' ? 1 : -1;
        }

        const skip = (page - 1) * limit;
        const [events, total] = await Promise.all([
            this.eventModel.find(query).sort(sort).skip(skip).limit(limit).exec(),
            this.eventModel.countDocuments(query),
        ]);

        return {
            events,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }

    async findOne(id: string): Promise<Event> {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid event ID');
        }
        const event = await this.eventModel.findById(id).exec();
        if (!event) {
            throw new NotFoundException('Event not found');
        }
        return event;
    }

    async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid event ID');
        }
        const updatedEvent = await this.eventModel
            .findByIdAndUpdate(id, updateEventDto, { new: true })
            .exec();
        if (!updatedEvent) {
            throw new NotFoundException('Event not found');
        }
        return updatedEvent;
    }

    async remove(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid event ID');
        }
        const result = await this.eventModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException('Event not found');
        }
    }

    async findByDateRange(startDate: string, endDate: string): Promise<Event[]> {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);

        return this.eventModel
            .find({
                date: {
                    $gte: start,
                    $lte: end,
                },
            })
            .sort({ date: 1, time: 1 })
            .exec();
    }
}
