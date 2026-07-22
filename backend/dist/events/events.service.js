"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./schemas/event.schema");
let EventsService = class EventsService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async create(createEventDto) {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }
    async findAll(page = 1, limit = 10, status, priority, searchDate, searchTitle, sortBy = 'created_at', sortOrder = 'desc') {
        const query = {};
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
        const sort = {};
        if (sortBy === 'created_at' || sortBy === 'updated_at') {
            sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
        }
        else if (sortBy === 'date') {
            sort.date = sortOrder === 'asc' ? 1 : -1;
        }
        else if (sortBy === 'status') {
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
    async findOne(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid event ID');
        }
        const event = await this.eventModel.findById(id).exec();
        if (!event) {
            throw new common_1.NotFoundException('Event not found');
        }
        return event;
    }
    async update(id, updateEventDto) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid event ID');
        }
        const updatedEvent = await this.eventModel
            .findByIdAndUpdate(id, updateEventDto, { new: true })
            .exec();
        if (!updatedEvent) {
            throw new common_1.NotFoundException('Event not found');
        }
        return updatedEvent;
    }
    async remove(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('Invalid event ID');
        }
        const result = await this.eventModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Event not found');
        }
    }
    async findByDateRange(startDate, endDate) {
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
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
//# sourceMappingURL=events.service.js.map