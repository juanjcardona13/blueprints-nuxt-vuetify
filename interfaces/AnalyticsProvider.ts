export interface AnalyticsProvider {
  capture(eventName: string, properties?: Record<string, unknown>): void;
  identify(distinctId: string, properties?: Record<string, unknown>): void;
  reset(): void;
  trackPageView(url?: string): void;
}
