import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { rand, randEmail, randJobTitle, randNumber, randPassword } from '@ngneat/falso';
import { AppModule } from '../app.module.js';
import { User } from '../user/entities/user.entity.js';
import { Skill } from '../skill/entities/skill.entity.js';
import { Cv } from '../cv/entities/cv.entity.js';

const app = await NestFactory.createApplicationContext(AppModule);

try {
  const dataSource = app.get(DataSource);
  const designations = ['NestJS', 'TypeScript', 'MySQL', 'Angular', 'Git'];

  await dataSource.transaction(async (manager) => {
    for (const [index, designation] of designations.entries()) {
      const user = await manager.save(User, {
        username: `demo${index + 1}`,
        email: randEmail(),
        password: randPassword(), // Donnée fictive pour le TP
      });

      const skill = await manager.save(Skill, { designation });

      await manager.save(Cv, {
        name: rand(['Mansour', 'Trabelsi', 'BenAli']),
        firstname: rand(['Omar', 'Ines', 'Yasmine']),
        age: randNumber({ min: 18, max: 65 }),
        cin: String(randNumber({ min: 0, max: 99_999_999 })).padStart(8, '0'),
        job: randJobTitle(),
        path: `uploads/cv-test-${index + 1}.pdf`,
        user,
        skills: [skill],
      });
    }
  });

  console.log('5 utilisateurs, 5 CV et 5 compétences enregistrés.');
} finally {
  await app.close();
}