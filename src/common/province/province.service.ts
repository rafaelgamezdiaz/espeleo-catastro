import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { BaseService } from '../base.service';
import { Province } from './entities/province.entity';
import { ProvinceRepository } from './province.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrentUserInterface } from '../../modules/users/interfaces/current-user.interface';

const logger = new Logger('PROVINCE');

@Injectable()
export class ProvinceService extends BaseService<any>(Province) {
  constructor(
    @InjectRepository(ProvinceRepository)
    private provinceRepository: ProvinceRepository,
  ) {
    super(provinceRepository);
  }

  /**
   * Creates a new Province
   * @param createProvinceDto
   * @param currentUser
   */
  async create(
    createProvinceDto: CreateProvinceDto,
    currentUser: CurrentUserInterface,
  ) {
    try {
      // Check if province is already registered
      const existProvince = await this.provinceRepository.findByField({
        name: createProvinceDto.name,
      });

      if (existProvince) {
        throw new ConflictException(`El usuario ya se encuentra registrado.`);
      } else {
        // Create Province instance
        const province = new Province(createProvinceDto);

        // Save createdAt
        //province.createdAt = new Date();

        // Call repository to create province.
        const response = await this.provinceRepository.createElement(province);
        if (response)
          logger.verbose(
            `--> Province registered: ${response.name.toUpperCase()}`,
          );
        return response;
      }
    } catch (e) {
      logger.error(e);
      throw new ConflictException(e);
    }
  }

  /**
   * Updates Province by id
   * @param updateProvinceDto
   * @param currentUser
   */
  async update(
    updateProvinceDto: UpdateProvinceDto,
    currentUser: CurrentUserInterface,
  ): Promise<Province> {
    try {
      // Check if province exist
      const province = await this.provinceRepository.findById(
        updateProvinceDto.id,
      );
      if (!province) {
        throw new NotFoundException(
          `No existe una provincia con ID = ${updateProvinceDto.id}`,
        );
      }

      // Update fields
      province.name = updateProvinceDto.name;
      province.updatedAt = new Date();

      return await this.provinceRepository.updateElement(province);
    } catch (error) {
      logger.error(error);
      throw new ConflictException(error);
    }
  }

  /**
   * Delete province by ID
   * @param id
   * @param currentUser
   */
  async remove(
    id: number,
    currentUser: CurrentUserInterface,
  ): Promise<Province> {
    try {
      const province = await this.provinceRepository.findById(id);
      if (!province) {
        throw new NotFoundException(`No existe una provincia con ID = ${id}`);
      }

      return await this.provinceRepository.removeElement(id, currentUser);
    } catch (error) {
      logger.error(error);
      throw new NotFoundException(error);
    }
  }
}
