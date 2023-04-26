import { Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';
import InvalidError from '../Middlewares/ParamError';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      // _id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async findByValue(value: string): Promise<ICar | null> {
    return this.model.findOne({ value });
  }

  public async getById(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new InvalidError('Invalid mongo id', 422);
    const test = await this.model.findOne({ _id });
    
    return test;
  }
}

export default CarODM;
