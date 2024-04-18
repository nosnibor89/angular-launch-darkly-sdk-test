import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { LaunchDarklyConfig, provideLaunchDarkly } from './launchdarkly/launchdarkly.service';


const ldConfig: LaunchDarklyConfig = {
  clientId: 'some-key',
  context: {
    key: 'viewer',
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideLaunchDarkly(ldConfig)],
};
