import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './modules/users/users.module';
import { CavesModule } from './modules/caves/caves.module';
import { AuthModule } from './auth/auth.module';
import { MembershipModule } from './common/membership/membership.module';
import { NameOriginModule } from './common/name-origin/name-origin.module';
import { TypeCaveModule } from './common/type-cave/type-cave.module';
import { ProvinceModule } from './common/province/province.module';
import { LocationAreaModule } from './common/location-area/location-area.module';
import { CaveConditionsModule } from './common/cave-conditions/cave-conditions.module';
import { TopographyMethodModule } from './common/topography-method/topography-method.module';
import { TypeExcavationModule } from './common/type-excavation/type-excavation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    CavesModule,
    AuthModule,
    MembershipModule,
    NameOriginModule,
    TypeCaveModule,
    ProvinceModule,
    LocationAreaModule,
    CaveConditionsModule,
    TopographyMethodModule,
    TypeExcavationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
