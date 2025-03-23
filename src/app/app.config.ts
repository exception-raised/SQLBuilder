import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAppInitializer } from '@angular/core';
import { routes } from './app.routes';
import { DatabaseService } from './core/services/database/database-service.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(() => {
      const db = inject(DatabaseService);

      return db.init();
    }),
  ],
};
