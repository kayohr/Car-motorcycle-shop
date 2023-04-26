import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import InvalidError from '../Middlewares/ParamError';
import CarODM from '../Models/CarODM';

class CarService {
  protected car = new CarODM();
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async register(data: ICar) {
    // const car = new CarODM();
    const newCar = await this.car.create(data);
    // console.log(newCar);

    return this.createCarDomain(newCar);
  }
  
  public async getAllCarOfList() {
    const allCar = await this.car.findAll();
    
    return allCar.map((e) => new Car(e));
  }

  public async getUpdateCar(id: string, body: ICar) {    
    const carUpdate = await this.car.update(id, body);
    
    if (carUpdate) {
      return this.createCarDomain(carUpdate);
    }
    throw new InvalidError('Car not found', 404);
  }

  public async getListCarId(id: string) {    
    const carListId = await this.car.getById(id);
    
    if (carListId) {
      return this.createCarDomain(carListId);
    }
    throw new InvalidError('Car not found', 404);
  }
}

export default CarService;
