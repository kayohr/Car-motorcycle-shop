import { expect } from 'chai';
// import { ObjectId } from 'mongodb';

import { Model } from 'mongoose';
import sinon from 'sinon';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcycleService';
// import Car from '../../../src/Domains/Car';
const modeloMoto = 'Honda Cb 600f Hornet';
describe('Service Car', function () {
  it('Cadastro valido', async function () {
    const entradaCadastroMoto: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: modeloMoto,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
        
    sinon.stub(Model, 'create').resolves(entradaCadastroMoto);
        
    const service = new MotorcyclesService();
    const result = await service.register(entradaCadastroMoto);
    expect(result).to.be.deep.equal(entradaCadastroMoto);
  });
  it('Lista dos carros', async function () {
    const CarroLIst: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: modeloMoto,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    sinon.stub(Model, 'find').resolves(CarroLIst);

    const service = new MotorcyclesService();
    const result = await service.getAllCarOfList();

    expect(result).to.deep.equal(CarroLIst);
  });
  it('Listar um carro com succeso', async function () {
    const updateCarro: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: modeloMoto,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
     
    };  
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateCarro);
    const service = new MotorcyclesService();
    const result = await service.getUpdateCar(updateCarro.id as string, updateCarro);

    expect(result).to.be.deep.equal(updateCarro);
  });
  it('Validar que não é possível listar um carro que não existe', async function () {
    const invalidId: IMotorcycle = {
      model: modeloMoto,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
     
    }; 
    const RESULT_ERROR = 'Motorcycle not found';

    sinon.stub(Model, 'create').resolves({});
    try {
      const service = new MotorcyclesService();
      await service.register(invalidId);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });
  it(
    'Validar que não é possível listar um carro quando o formato do id esta inválido',
    async function () {
      const invalidId: IMotorcycle = {
        model: modeloMoto,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
       
      };
      const RESULT_ERROR = 'Invalid mongo id';

      sinon.stub(Model, 'create').resolves({});
      try {
        const service = new MotorcyclesService();
        await service.register(invalidId);
      } catch (error) {
        expect((error as Error).message).to.be.equal(RESULT_ERROR);
      }
    },
  );
  afterEach(function () {
    sinon.restore();
  });
});