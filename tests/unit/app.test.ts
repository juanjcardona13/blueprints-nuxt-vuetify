import { describe, it, expect } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import App from '@/app.vue'

mockNuxtImport('useI18n', () => {
  return () => ({
    setLocale: () => {},
  })
})

describe('Mounting app with `@nuxtjs/i18n`', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(App, { route: '/' })
    expect(component.html()).toContain('Welcome to the app')
    expect(component.html()).toContain('Docker Work and HR')
  })
  it('can change the locale', async () => {
    const component = await mountSuspended(App, { route: '/' })
    await component.vm.$i18n.setLocale('fr')
    expect(component.html()).toContain('Bienvenue dans l\'application')
  })
})

