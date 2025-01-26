import { setup, createPage, url } from '@nuxt/test-utils/e2e'
import { describe, test, expect } from 'vitest'

describe('app', async () => {
  await setup({})

  test('with playwright', async () => {
    const page = await createPage()
    await page.goto(url('/'), { waitUntil: 'hydration' })
    const html = await page.content()
    expect(html).toContain('Docker Work and HR')
    await page.click('button:nth-child(2)')
    const newHtml = await page.content()
    expect(newHtml).toContain('Bienvenue dans l\'application')
  })
})