import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _carModel: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._carModel = model;
  }

  public async read(): Promise<ICar[]> {
    const allCars = await this._carModel.read();
    return allCars;
  }

  public async readOne(_id: string): Promise<ICar> {
    const targetCar = await this._carModel.readOne(_id);
    if (!targetCar) throw new Error(ErrorTypes.ObjectNotFound);

    return targetCar;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    return this._carModel.create(obj);
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    const targetCar = await this._carModel.readOne(_id);
    if (!targetCar) throw new Error(ErrorTypes.ObjectNotFound);
    
    return this._carModel.update(_id, obj);
  }

  public async delete(_id: string): Promise<ICar | null> {
    const deletedCar = await this._carModel.delete(_id);
    if (!deletedCar) throw new Error(ErrorTypes.ObjectNotFound);

    return deletedCar;
  }
}

export default CarService;
