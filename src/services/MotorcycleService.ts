import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class Motorcycle implements IService<IMotorcycle> {
  constructor(private _motorcycle: IModel<IMotorcycle>) {}

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.readOne(_id);
    if (!result) throw new Error(ErrorTypes.ObjectNotFound);

    return result;
  }

  public async create(body: IMotorcycle): Promise<IMotorcycle> {
    return this._motorcycle.create(body);
  }

  public async update(_id: string, body: IMotorcycle): Promise<IMotorcycle> {
    const result = await this._motorcycle.update(_id, body);
    if (!result) throw new Error(ErrorTypes.ObjectNotFound);

    return result;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.delete(_id);
    if (!result) throw new Error(ErrorTypes.ObjectNotFound);

    return result;
  }
}