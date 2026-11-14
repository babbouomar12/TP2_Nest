import { Module } from '@nestjs/common';
import { CvService } from './cv.service.js';
import { CvController } from './cv.controller.js';

@Module({
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
