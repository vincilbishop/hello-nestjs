import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetModule } from './widget/widget.module';
import { Connection } from 'typeorm';
import { ControllersModule } from './controllers/controllers.module';
import { AuthenticationService } from './authentication/authentication.service';
import DoneCallback = jest.DoneCallback;
import { BullModule } from 'nest-bull';
import { Job } from 'bull';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BullModule.forRoot({
      name: 'store',
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        (job: Job, done: DoneCallback) => { done(null, job.data); },
      ],
    }),
    WidgetModule,
    ControllersModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
