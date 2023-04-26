import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
    //   _id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCAr = await this.service.register(car);
      return this.res.status(201).json(newCAr);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const carAll = await this.service.getAllCarOfList();
      if (carAll) {
        return this.res.status(200).json(carAll);
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async getUpdate() {
    const { id } = this.req.params;    
    const { body } = this.req;
    try {
      const carUpdate = await this.service.getUpdateCar(id, body);
      if (carUpdate) {
        return this.res.status(200).json(carUpdate);
      }
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarId() {
    const { id } = this.req.params;    
    try {
      const carId = await this.service.getListCarId(id);
      if (carId) {
        return this.res.status(200).json(carId);
      }
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;