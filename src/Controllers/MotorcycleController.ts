import { NextFunction, Request, Response } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcycleService';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const motorcycles: IMotorcycles = {
    //   _id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,

    };

    try {
      const newMoto = await this.service.register(motorcycles);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motoAll = await this.service.getAllCarOfList();
      if (motoAll) {
        return this.res.status(200).json(motoAll);
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async getUpdate() {
    const { id } = this.req.params;    
    const { body } = this.req;
    try {
      const motoUpdate = await this.service.getUpdateCar(id, body);
      if (motoUpdate) {
        return this.res.status(200).json(motoUpdate);
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotoId() {
    const { id } = this.req.params;    
    try {
      const motoId = await this.service.getListMotoId(id);
      if (motoId) {
        return this.res.status(200).json(motoId);
      }
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;