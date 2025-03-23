import { Injectable } from '@angular/core';

export interface QueryOptions {
  columns?: string[];
  orderBy?: Array<{ column: string; direction: 'ASC' | 'DESC' }>;
}

@Injectable({
  providedIn: 'root',
})
export class SQLBuilderService {
  public buildSelectStatement(
    table: string,
    options?: QueryOptions,
    filter?: Record<string, any>
  ): string {
    const columns = options?.columns?.join(', ') || '*';

    let statement = `SELECT ${columns} FROM ${table}`;

    if (filter && Object.keys(filter).length > 0) {
      const conditions = Object.entries(filter).map(([key, value], index) => {
        return `${key} = ${value}`;
      });

      statement += ` WHERE ${conditions.join(' AND ')}`;
    }

    statement += this.buildOrderByStatement(options);

    statement += ';';

    return statement;
  }

  private buildOrderByStatement(options?: QueryOptions): string {
    if (!options?.orderBy || options.orderBy.length === 0) {
      return '';
    }
    let statement = '';
    const orderClauses = options.orderBy.map(
      (order) => `${order.column} ${order.direction}`
    );
    statement += ` ORDER BY ${orderClauses.join(', ')}`;
    return statement;
  }
}
