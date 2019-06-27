import { Module } from '@nestjs/common';
import { WidgetController } from './widget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Widget } from '@models/widget.entity';
import { WidgetService } from './widget.service';

@Module({
  imports: [TypeOrmModule.forFeature([Widget])],
  controllers: [WidgetController],
  providers: [WidgetService],
})
export class WidgetModule {}
