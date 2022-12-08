import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EventEmitterModule.forRoot(), ScheduleModule.forRoot()],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}