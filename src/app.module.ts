import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvModule } from './cv/cv.module.js';
import { SkillModule } from './skill/skill.module.js';
import { User } from './user/entities/user.entity.js';
import { Cv } from './cv/entities/cv.entity.js';
import { Skill } from './skill/entities/skill.entity.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tp2',
      entities: [User, Cv , Skill],
      synchronize: true, 
      autoLoadEntities: true
    }),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'tp2',
    }),
    UserModule,
    CvModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
