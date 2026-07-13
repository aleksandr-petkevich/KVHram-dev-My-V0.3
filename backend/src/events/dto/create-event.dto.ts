import { Transform } from 'class-transformer';
import { IsArray, IsDate, IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { EventStatus, EventPriority } from '../schemas/event.schema';

export class CreateEventDto {
    @Transform(({ value }) => value ? new Date(value) : null)
    @IsDate()
    date: Date;

    @IsOptional()
    @IsString()
    time?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    title: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    @MaxLength(100, { each: true })
    additional_title?: string[];

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description?: string;

    @IsOptional()
    @IsInt()
    communicants?: number;

    @IsOptional()
    @IsInt()
    parishioners?: number;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    other?: string;

    @IsOptional()
    @IsEnum(['new', 'in_progress', 'agreed', 'done'])
    status?: EventStatus;

    @IsOptional()
    @IsEnum(['low', 'normal', 'high'])
    priority?: EventPriority;

    @IsOptional()
    @IsString()
    titleColor?: string;

    @IsOptional()
    @IsString()
    additionalTitleColor?: string;

    @IsOptional()
    @IsString()
    descriptionColor?: string;

    @IsOptional()
    @IsString()
    otherColor?: string;
}