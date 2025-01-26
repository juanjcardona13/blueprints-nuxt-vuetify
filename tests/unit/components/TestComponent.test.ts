// @vitest-environment nuxt
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import TestComponent from "@/components/TestComponent.vue";

mockNuxtImport("useState", () => {
  return () => 3;
});

describe("TestComponent", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(TestComponent);
    expect(component.html()).toContain("Number");
  });
  it("returns the state", async () => {
    const component = await mountSuspended(TestComponent);
    expect(component.text()).toContain("Number: 3Refresh");
  });
});
