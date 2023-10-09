import { Module } from '@nestjs/common';
import { OpningAppsService } from './opning-apps.service';
import { OpningAppsController } from './opning-apps.controller';

@Module({
  controllers: [OpningAppsController],
  providers: [OpningAppsService],
})
export class OpningAppsModule {}
