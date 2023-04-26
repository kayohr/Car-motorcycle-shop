import { expect } from 'chai';
// import { ObjectId } from 'mongodb';

import { Model, isValidObjectId } from 'mongoose';
import sinon from 'sinon';
// import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe.only('Service Car', function () {
  it('Cadastro valido', async function () {
    const entradaCadastroCarro: ICar = {
      _id: isValidObjectId('6348513f34c397abcad040b2').toString(),
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
        
    sinon.stub(Model, 'create').resolves({
      ...entradaCadastroCarro,
      _id: isValidObjectId(entradaCadastroCarro._id),
      //   id: true,
      
    });
        
    const service = new CarService();
    const result = await service.register(entradaCadastroCarro);
    expect(result).to.be.deep.equal({
      ...entradaCadastroCarro,
    //   id: true,
    });
    // expect(result).to.be.deep.include({
    //     _id: entradaCadastroCarro._id,
    //     model: entradaCadastroCarro.model,
    //     year: entradaCadastroCarro.year,
    //     color: entradaCadastroCarro.color,
    //     status: entradaCadastroCarro.status,
    //     buyValue: entradaCadastroCarro.buyValue,
    //     doorsQty: entradaCadastroCarro.doorsQty,
    //     seatsQty: entradaCadastroCarro.seatsQty,
    //   });
  });
  //   it('Lista dos carros', async function () {
  //     const CarroLIst: ICar[] = [
  //       {
  //         _id: '634852326b35b59438fbea2f',
  //         model: 'Marea',
  //         year: 2002,
  //         color: 'Black',
  //         status: true,
  //         buyValue: 15.99,
  //         doorsQty: 4,
  //         seatsQty: 5,
  //       },
  //       {
  //         _id: '634852326b35b59438fbea31',
  //         model: 'Tempra',
  //         year: 1995,
  //         color: 'Black',
  //         buyValue: 39,
  //         doorsQty: 2,
  //         seatsQty: 5,
  //       },
  //     ];  
  //     sinon.stub(Model, 'findAll').resolves(CarroLIst);

  //     const service = new CarService();
  //     const result = await service.getAllCarOfList();

  //     expect(result).to.be.deep.equal(CarroLIst);
  //   });
  //   it('Listar um carro com succeso', async function () {
  //     const updateCarro: ICar = {
  //       _id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     };  
  //     sinon.stub(Model, 'update').resolves();
  //     const service = new CarService();
  //     const result = await service.getUpdateCar(updateCarro, _id: isValidObjectId(entradaCadastroCarro._id));

  //     expect(result).to.be.deep.equal(updateCarro);
  //   });
  //   it('Validar que não é possível listar um carro que não existe', async function () {
  //     const invalidId: ICar = {
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.990,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     }; 
  //     sinon.stub(Model, 'create').resolves({});
  //     const RESULT_ERROR = 'Car not found';

  //     sinon.stub(Model, 'create').resolves({});
  //     try {
  //       const service = new CarService();
  //       await service.register(invalidId);
  //     } catch (error) {
  //       expect((error as Error).message).to.be.equal(RESULT_ERROR);
  //     }
  //   });
  //   it(
  //     'Validar que não é possível listar um carro quando o formato do id esta inválido',
  //     async function () {
  //       const invalidId: ICar = {
  //         model: 'Marea',
  //         year: 2002,
  //         color: 'Black',
  //         status: true,
  //         buyValue: 15.990,
  //         doorsQty: 4,
  //         seatsQty: 5,
  //       };
  //     const RESULT_ERROR = 'Invalid mongo id';

//       sinon.stub(Model, 'create').resolves({});
//       try {
//         const service = new CarService();
//         await service.register(invalidId);
//       } catch (error) {
//         expect((error as Error).message).to.be.equal(RESULT_ERROR);
//       }
//     },
//   );
});