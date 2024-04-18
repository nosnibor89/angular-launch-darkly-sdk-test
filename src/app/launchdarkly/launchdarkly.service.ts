import { Signal, computed, signal } from '@angular/core';
import { LDClient, LDContext, initialize } from 'launchdarkly-js-client-sdk';

export interface LaunchDarklyConfig {
  clientId: string;
  context: LDContext;
  debug?: boolean;
}

const defaultConfig: Partial<LaunchDarklyConfig> = {
  debug: false,
};

export function provideLaunchDarkly(config: LaunchDarklyConfig) {
  return {
    provide: LaunchDarklyService,
    useFactory: () => {
      const instanceConfig = {
        ...defaultConfig,
        ...config,
      };
      return new LaunchDarklyService(instanceConfig);
    },
  };
}

type Flag = Record<string, boolean | string>;
type FlagValue = boolean | string;

export type FlagSignal = Signal<FlagValue>;

export class LaunchDarklyService {
  private client: LDClient | null = null;
  initializing = signal<boolean>(false);

  constructor(private readonly config: LaunchDarklyConfig) {
    this.initializing.set(true);
    this.initialize().then(() => {
      this.startToListen();
      this.initializing.set(false);
    });
  }

  private flags = signal<Flag>({});

  private async initialize() {
    this.client = initialize(this.config.clientId, this.config.context);
    await this.client.waitUntilReady();
    this.flags.set(this.client.allFlags());
  }

  private startToListen() {
    this.client?.on('change', () => {
      const allFlags = this.client?.allFlags() ?? {};
      this.flags.set(allFlags);
    });
  }

  isOn(flag: string): boolean {
    return !!this.flags()[flag];
  }

  watch(flag: string): Signal<FlagValue> {
    return computed(() => {
      return this.flags()[flag];
    });
  }

  async identify(context: LDContext) {
    await this.client?.identify(context);
  }
}
