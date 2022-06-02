import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from '../modules/users/entities/user.entity';
import { Membership } from '../common/membership/entities/membership.entity';
import { Cave } from '../modules/caves/entities/cave.entity';
import { CaveRegister } from '../modules/caves/cave-register/entities/cave-register.entity';
import { Geology } from '../modules/caves/geology/entities/geology.entity';
import { Paleontology } from '../modules/caves/paleontology/entities/paleontology.entity';
import { TypeExcavation } from '../common/type-excavation/entities/type-excavation.entity';
import { NameOrigin } from '../common/name-origin/entities/name-origin.entity';
import { TypeCave } from '../common/type-cave/entities/type-cave.entity';
import { CaveCondition } from '../common/cave-conditions/entities/cave-condition.entity';
import { TopographyMethod } from '../common/topography-method/entities/topography-method.entity';
import { Province } from '../common/province/entities/province.entity';
import { LocationArea } from '../common/location-area/entities/location-area.entity';
import { ConfigModule, ConfigService } from "@nestjs/config";

/**
 * Type ORM config file
 *
 */
// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: process.env.POSTGRES_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DATABASE,
//   entities: [
//     User,
//     Membership,
//     Cave,
//     CaveRegister,
//     Geology,
//     Paleontology,
//     TypeExcavation,
//     NameOrigin,
//     TypeCave,
//     CaveCondition,
//     TopographyMethod,
//     Province,
//     LocationArea,
//   ],
//   synchronize: true,
// };

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
     // entities: [
     //    User,
     //    Membership,
     //    Cave,
     //    CaveRegister,
     //    Geology,
     //    Paleontology,
     //    TypeExcavation,
     //    NameOrigin,
     //    TypeCave,
     //    CaveCondition,
     //    TopographyMethod,
     //    Province,
     //    LocationArea,
     //  ],
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
}