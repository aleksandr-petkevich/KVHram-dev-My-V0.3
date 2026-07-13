import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Request } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventStatus, EventPriority } from './schemas/event.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Create a new event' })
    @ApiResponse({ status: 201, description: 'Event created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    create(@Body() createEventDto: CreateEventDto, @Request() req: any) {
        return this.eventsService.create(createEventDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Get all events with pagination, filtering, and sorting' })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @ApiQuery({ name: 'status', required: false, type: String })
    @ApiQuery({ name: 'priority', required: false, type: String })
    @ApiQuery({ name: 'searchDate', required: false, type: String })
    @ApiQuery({ name: 'searchTitle', required: false, type: String })
    @ApiQuery({ name: 'sortBy', required: false, type: String })
    @ApiQuery({ name: 'sortOrder', required: false, type: String })
    findAll(
        @Request() req: any,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('status') status?: string,
        @Query('priority') priority?: string,
        @Query('searchDate') searchDate?: string,
        @Query('searchTitle') searchTitle?: string,
        @Query('sortBy') sortBy?: string,
        @Query('sortOrder') sortOrder?: string,
    ) {
        return this.eventsService.findAll(
            parseInt(page ?? '1'),
            parseInt(limit ?? '10'),
            status as EventStatus,
            priority as EventPriority,
            searchDate,
            searchTitle,
            sortBy,
            sortOrder as 'asc' | 'desc',
        );
    }

    @Get('range')
    @ApiOperation({ summary: 'Get events by date range' })
    @ApiQuery({ name: 'startDate', required: true, type: String, description: 'Start date (YYYY-MM-DD)' })
    @ApiQuery({ name: 'endDate', required: true, type: String, description: 'End date (YYYY-MM-DD)' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Max events to return' })
    findByDateRange(
        @Request() req: any,
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string,
        @Query('limit') limit?: string,
    ) {
        return this.eventsService.findByDateRange(startDate, endDate);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Get event by ID' })
    @ApiResponse({ status: 200, description: 'Event found' })
    @ApiResponse({ status: 404, description: 'Event not found' })
    findOne(@Param('id') id: string, @Request() req: any) {
        return this.eventsService.findOne(id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Update event' })
    @ApiResponse({ status: 200, description: 'Event updated' })
    @ApiResponse({ status: 404, description: 'Event not found' })
    update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @Request() req: any) {
        return this.eventsService.update(id, updateEventDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Delete event' })
    @ApiResponse({ status: 200, description: 'Event deleted' })
    @ApiResponse({ status: 404, description: 'Event not found' })
    remove(@Param('id') id: string, @Request() req: any) {
        return this.eventsService.remove(id);
    }
}