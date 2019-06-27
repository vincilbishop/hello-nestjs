import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetModule } from './widget/widget.module';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), WidgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
