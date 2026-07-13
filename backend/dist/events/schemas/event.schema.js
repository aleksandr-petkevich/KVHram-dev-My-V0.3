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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = exports.Event = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Event = class Event extends mongoose_2.Document {
    date;
    time;
    title;
    additional_title;
    description;
    communicants;
    parishioners;
    other;
    status;
    priority;
    titleColor;
    additionalTitleColor;
    descriptionColor;
    otherColor;
};
exports.Event = Event;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Event.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, minlength: 3, maxlength: 100 }),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], Event.prototype, "additional_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 500 }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Event.prototype, "communicants", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Event.prototype, "parishioners", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 1000 }),
    __metadata("design:type", String)
], Event.prototype, "other", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['new', 'in_progress', 'agreed', 'done'], default: 'new' }),
    __metadata("design:type", String)
], Event.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['low', 'normal', 'high'], default: 'normal' }),
    __metadata("design:type", String)
], Event.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Event.prototype, "titleColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Event.prototype, "additionalTitleColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Event.prototype, "descriptionColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Event.prototype, "otherColor", void 0);
exports.Event = Event = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Event);
exports.EventSchema = mongoose_1.SchemaFactory.createForClass(Event);
//# sourceMappingURL=event.schema.js.map