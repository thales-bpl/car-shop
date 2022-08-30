export interface IModel<T> {
  create(body: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(idString: string): Promise<T | null>,
  update(idString: string, body: T): Promise<T | null>,
  delete(idString: string): Promise<T | null>,
}
