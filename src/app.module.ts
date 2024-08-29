import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    database: "todo",
    host:"ep-tiny-mouse-a50x08ic.us-east-2.aws.neon.tech",
    port: 5432,
    username: "todo_owner",
    password: "6kLnWVbvJCe3",
    ssl: true,
    synchronize: true,
    autoLoadEntities: true,
    uuidExtension: 'pgcrypto',
    namingStrategy: new SnakeNamingStrategy(),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// postgresql://todo_owner:6kLnWVbvJCe3@ep-tiny-mouse-a50x08ic.us-east-2.aws.neon.tech/todo?sslmode=require