import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import { Widget } from '@models/widget.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WidgetService extends TypeOrmCrudService<Widget> {
  constructor(@InjectRepository(Widget) repo) {
    super(repo);
  }
}
