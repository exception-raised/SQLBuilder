import { inject, Injectable } from '@angular/core';
import { IDatabase } from '../../interfaces/database.interface';
import {
  QueryOptions,
  SQLBuilderService,
} from '../sql-builder/sqlbuilder.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements IDatabase {
  private readonly sqlb = inject(SQLBuilderService);

  init<T>(): any {
    this.select<T>(
      'users',
      {
        columns: ['id', 'name', 'email'],
        orderBy: [{ column: 'name', direction: 'ASC' }],
      },
      {
        active: true,
        role: 'user',
      }
    );
  }

  select<T>(
    table: string,
    options?: QueryOptions,
    filter?: Partial<any>
  ): Observable<T[]> {
    const sql = this.sqlb.buildSelectStatement(table, options, filter);

    console.log('Executing SQL:', sql);

    return new Observable<T[]>();
  }
}
