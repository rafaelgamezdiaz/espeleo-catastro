import { ConflictException, NotFoundException, Type } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

export function BaseRepository<T extends Type<unknown>>(classRef): any {
  @EntityRepository(classRef)
  abstract class BaseRepositoryHost extends Repository<typeof classRef> {
    /**
     * Find all
     */
    async findAll(): Promise<typeof classRef[]> {
      return await this.find({
        where: {
          deletedAt: null,
        },
        order: {
          id: 'ASC',
        },
      });
    }

    /**
     * Create
     */
    async createElement(item: typeof classRef): Promise<typeof classRef> {
      return await this.save(item);
    }

    /**
     * Find by ID
     * @param id
     */
    async findById(id: number): Promise<typeof classRef> {
      const item = await this.findOne(id, {
        where: {
          deletedAt: null,
        },
      });
      if (!item) {
        throw new NotFoundException(
          `No existe un elemento ${classRef.name} con ID = ${id}`,
        );
      }
      return item;
    }

    /**
     * Find by name
     * @param name
     */
    async existElement(name: string): Promise<boolean> {
      const item = await this.find({ where: { name } });
      return item.length > 0;
    }

    /**
     * Update (Edit)
     */
    async updateElement(item: typeof classRef): Promise<typeof classRef> {
      const itemUpdated = await this.save(item);
      if (!itemUpdated) {
        throw new ConflictException(
          `Ha ocurrido un error al intentar actualizar el ${classRef.name}.`,
        );
      }
      return itemUpdated;
    }

    /**
     * Remove element ( the element will not be removed from the database )
     *  - change active to false
     *  - store the deletedAt, date when element was removed
     *  note: use both fields to check if element is not deleted
     * @param id
     */
    async removeElement(
      id: number,
    ): Promise<typeof classRef> {
      const item = await this.findById(id);
      item.active = false;
      item.endAt = new Date();
      item.updatedAt = new Date();

      return await this.save(item);
    }

    /**
     * Find user by ID
     * @param search
     */
    async findByField(field: {}): Promise<typeof classRef> {
      return await this.findOne({
        where: {
          ...field,
          endAt: null,
        },
      });
    }
  }
  return BaseRepositoryHost;
}
