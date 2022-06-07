import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParametersRepository } from "./parameter.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ParametersRepository])],
  controllers: [],
  providers: [],
})
export class ParametersModule {}
