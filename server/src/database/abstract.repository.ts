import {
  FilterQuery,
  Model,
  UpdateQuery,
  Connection,
  SaveOptions,
  Types,
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';

export abstract class AbstractRepository<T extends AbstractDocument> {
  constructor(
    protected readonly model: Model<T>,
    private readonly connection: Connection,
  ) {}

  async create(document: Omit<T, '_id'>, options?: SaveOptions): Promise<T> {
    const createdDocument = new this.model({
      _id: new Types.ObjectId(),
      ...document,
    });
    return (await createdDocument.save(options)).toJSON() as T;
  }

  async findOne(filterQuery: FilterQuery<T>): Promise<T | null> {
    return this.model.findOne(filterQuery, {}, { lean: true });
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<T>,
    update: UpdateQuery<T | null>,
  ) {
    return this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    });
  }

  async findAll(filterQuery: FilterQuery<T>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async delete(filterQuery: FilterQuery<T | null>) {
    return this.model.deleteOne(filterQuery, {
      lean: true,
    });
  }

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }
}
