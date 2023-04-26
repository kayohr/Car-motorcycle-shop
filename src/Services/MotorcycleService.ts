import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import InvalidError from '../Middlewares/ParamError';
import MotorcyclesODM from '../Models/MotorcycleODM';

class MotorcyclesService {
  protected motorcyclesService = new MotorcyclesODM();
  private createCarDomain(motorcyclesService: IMotorcycles | null): Motorcycles | null {
    if (motorcyclesService) {
      return new Motorcycles(
        motorcyclesService,
      );
    }
    return null;
  }

  public async register(data: IMotorcycles) {
    // const car = new CarODM();
    const newMoto = await this.motorcyclesService.create(data);
    // console.log(newCar);

    return this.createCarDomain(newMoto);
  }
  
  public async getAllCarOfList() {
    const allMoto = await this.motorcyclesService.findAll();
    
    return allMoto.map((e) => new Motorcycles(e));
  }

  public async getUpdateCar(id: string, body: IMotorcycles) {    
    const motoUpdate = await this.motorcyclesService.update(id, body);
    
    if (motoUpdate) {
      return this.createCarDomain(motoUpdate);
    }
    throw new InvalidError('Motorcycle not found', 404);
  }

  public async getListMotoId(id: string) {    
    const motoListId = await this.motorcyclesService.getById(id);
    
    if (motoListId) {
      return this.createCarDomain(motoListId);
    }
    throw new InvalidError('Motorcycle not found', 404);
  }
}

export default MotorcyclesService;
