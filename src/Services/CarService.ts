import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async register(data: ICar) {
    const car = new CarODM();
    const newCar = await car.create(data);
    return this.createCarDomain(newCar);
  }

//   public async getByValue(value: string) {
//     const keyODM = new KeyODM();
//     const key = await keyODM.findByValue(value);
//     return this.createCarDomain(key);
//   }
}

export default CarService;
