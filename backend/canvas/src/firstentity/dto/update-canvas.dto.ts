// src/firstentity/dto/update-canvas.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateCanvasDto } from './create-canvas.dto';

export class UpdateCanvasDto extends PartialType(CreateCanvasDto) {}
