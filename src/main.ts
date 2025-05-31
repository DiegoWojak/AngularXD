import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { isDevMode } from '@angular/core';
import { AppComponent } from './app/app.component';

async function enableMocking() {
  if(!isDevMode()) {
    return Promise.resolve();
  }

  if (typeof Worker === 'undefined') {
    return
  }
  
  const { worker } = await import('./mocks/browser')
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
