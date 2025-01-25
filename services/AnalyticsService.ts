// services/AnalyticsService.ts
import type { AnalyticsProvider } from "~/interfaces/AnalyticsProvider";

export class AnalyticsService {
  private readonly providers: AnalyticsProvider[] = [];

  addProvider(provider: AnalyticsProvider): void {
    this.providers.push(provider);
  }

  capture(eventName: string, properties?: Record<string, unknown>): void {
    this.providers.forEach((provider) =>
      provider.capture(eventName, properties),
    );
  }

  identify(distinctId: string, properties?: Record<string, unknown>): void {
    this.providers.forEach((provider) =>
      provider.identify(distinctId, properties),
    );
  }

  reset(): void {
    this.providers.forEach((provider) => provider.reset());
  }

  trackPageView(url?: string): void {
    this.providers.forEach((provider) => provider.trackPageView(url));
  }
}
