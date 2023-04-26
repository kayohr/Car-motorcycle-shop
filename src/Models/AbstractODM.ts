import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';
import InvalidError from '../Middlewares/ParamError';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
  
  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new InvalidError('Invalid mongo id', 422);
  
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async findAll(): Promise<T[]> {
    const getList = await this.model.find();
    return getList;
  }
}
  
export default AbstractODM;
