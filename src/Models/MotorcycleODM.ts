import { Schema, isValidObjectId } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import InvalidError from '../Middlewares/ParamError';
import AbstractODM from './AbstractODM';

class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      // _id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },

    });
    super(schema, 'Motorcycle');
  }

  public async findByValue(value: string): Promise<IMotorcycles | null> {
    return this.model.findOne({ value });
  }

  public async getById(_id: string): Promise<IMotorcycles | null> {
    if (!isValidObjectId(_id)) throw new InvalidError('Invalid mongo id', 422);
    const test = await this.model.findOne({ _id });
    
    return test;
  }
}

export default MotorcyclesODM;