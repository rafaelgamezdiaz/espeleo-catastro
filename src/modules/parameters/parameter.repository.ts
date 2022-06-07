import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { Parameter } from './entity/parameters.entity';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';

@EntityRepository(Parameter)
export class ParametersRepository extends Repository<Parameter> {
  /**
   * Find all
   */
  async findAll(): Promise<Parameter[]> {
    return await this.find();
  }

  /**
   * Register Parameter
   * @param createParameterDto
   */
  async createParameter(
    createParameterDto: CreateParameterDto): Promise<Parameter> {
    const parameter = this.create(createParameterDto);
    return await parameter.save();
  }

  /**
   * Find parameter by ID
   * @param param_id
   */
  async findParameterById(param_id: string): Promise<Parameter> {
    const parameter = await this.findOne(param_id);
    if (!parameter) {
      throw new NotFoundException(
        `No existe un parámetro con ID = ${param_id}`,
      );
    }
    return parameter;
  }

  /**
   * Update parameter
   * @param param_id
   * @param updateParameterDto
   */
  async updateParameter(
    param_id: string,
    updateParameterDto: UpdateParameterDto,
  ): Promise<any> {
    const parameter = await this.findOne(param_id);
    if (!parameter) {
      throw new NotFoundException(
        `No existe un parámetro con ID = ${param_id}`,
      );
    }
    const parameterUpdated = await this.update(param_id, updateParameterDto);
    if (!parameterUpdated) {
      throw new ConflictException(
        `Ha ocurrido un error al intentar actualizar los datos del parámetro.`,
      );
    }
    return {
      message: `Se han actualizado los datos del parámetro`,
    };
  }

  /**
   * Remove parameter
   * @param param_id
   */
  async removeParameter(param_id: number) {
    // const parameter = await this.findParameterById(param_id);
    // if (await parameter.delete()) {
    //   return {
    //     message: `Se ha eliminado el parámetro exitosamente`,
    //   };
    // } else {
    //   return {
    //     message: `Error al intentar eliminar el parámetro`,
    //   };
    // }
  }
}
