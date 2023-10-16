import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defaultPrefix } from '@my-component/core/utils/config'
import Button from '../button.vue'

describe('button test', () => {
  it('create default button', () => {
    const wrapper = mount(() => <Button />)

    expect(wrapper.classes()).toContain(`${defaultPrefix}-button`)
    expect(wrapper.classes()).toContain(`${defaultPrefix}-button-default`)
  })

  it('create primary button', () => {
    const wrapper = mount(() => <Button type="primary"/>)

    expect(wrapper.classes()).toContain(`${defaultPrefix}-button-primary`)
  })

  it('click button', async () => {
    const fn = vi.fn()
    const wrapper = mount(() => <Button onClick={fn}/>)

    wrapper.findComponent(Button).trigger('click')
    await wrapper.vm.$nextTick()
    expect(fn).toHaveBeenCalled()
    expect(fn.mock.calls[0][0].type).toBe('click')
  })
})
