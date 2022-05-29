import { Injectable, Logger, NotFoundException, Type } from "@nestjs/common";

const logger = new Logger('MS-USER-SERVICE');

export function BaseService<T extends Type<unknown>>(classRef): any {
  @Injectable()
  abstract class BaseServiceHost {
    protected constructor(private readonly repository) {}

    /**
     * Returns all
     */
    async findAll(): Promise<typeof classRef[]> {
      return await this.repository.findAll();
    }

    /**
     * Find by ID
     * @param id
     */
    async findById(id: number) {
      try {
        const item = await this.repository.findById(id);
        if (!item) {
          throw new NotFoundException(`No existe ${classRef.name} con ID = ${id}`);
        }
        return item;
      } catch (error) {
        logger.error(error);
        throw new NotFoundException(error);
      }
    }
  }
  return BaseServiceHost;
}