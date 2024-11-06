import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /*
    consumer.apply(LoggerMiddleware).forRoutes('users') // ({ path: '/users', method: RequestMethod.POST})
    .apply(AuthMiddleware).forRoutes('users');
    */
  }
}
