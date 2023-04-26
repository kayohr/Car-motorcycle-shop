import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Custom' | 'Street' | 'Trail';
  private engineCapacity: number;

  constructor(motorcycles: IMotorcycle) {
    super(motorcycles);
    this.id = motorcycles.id;
    this.model = motorcycles.model;
    this.year = motorcycles.year;
    this.color = motorcycles.color;
    this.status = motorcycles.status || false;
    this.buyValue = motorcycles.buyValue;
    this.category = motorcycles.category;
    this.engineCapacity = motorcycles.engineCapacity;
  }
}

export default Motorcycle;