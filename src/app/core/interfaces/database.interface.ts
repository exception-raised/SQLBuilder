import { Observable } from 'rxjs';
import { QueryOptions } from '../services/sql-builder/sqlbuilder.service';

export interface IDatabase {
  init<T>(): Observable<T>;
  select<T>(
    table: string,
    options?: QueryOptions,
    filter?: Partial<any>
  ): Observable<T[]>;
}
