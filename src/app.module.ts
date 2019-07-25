import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetModule } from './widget/widget.module';
import { Connection } from 'typeorm';
import { ControllersModule } from './controllers/controllers.module';
import { AuthenticationService } from './authentication/authentication.service';
import { BullModule } from 'nest-bull';
import { Job } from 'bull';
import { InterceptorController } from './interceptor/interceptor.controller';
import { InterceptorService } from './interceptor/interceptor.service';
import { DataController } from './data/data.controller';
import { ServicesController } from './services/services.controller';
import { DataService } from './data/data.service';
import { StateService } from './state/state.service';
import { StateController } from './state/state.controller';
import { MachineController } from './machine/machine.controller';
import { MachineService } from './machine/machine.service';
import DoneCallback = jest.DoneCallback;

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
  controllers: [AppController, InterceptorController, DataController, ServicesController, StateController, MachineController],
  providers: [AppService, AuthenticationService, InterceptorService, DataService, StateService, MachineService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
