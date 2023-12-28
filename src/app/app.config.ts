import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DragAndDropDirective } from './directives/dnd/drag-and-drop.directive';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), DragAndDropDirective]};
