import { defineNuxtPlugin } from "#app";
import { AnalyticsService } from "~/services/AnalyticsService";
import { PostHogProvider } from "~/services/providers/PostHogProvider";
import { MixpanelProvider } from "~/services/providers/MixpanelProvider";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const analyticsService = new AnalyticsService();

  if (config.public.posthogKey) {
    analyticsService.addProvider(
      new PostHogProvider(config.public.posthogKey, config.public.posthogHost),
    );
  }

  if (config.public.mixpanelToken) {
    analyticsService.addProvider(
      new MixpanelProvider(config.public.mixpanelToken),
    );
  }
  return {
    provide: {
      analytics: analyticsService,
    },
  };
});
