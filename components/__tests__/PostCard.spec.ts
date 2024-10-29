import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import PostCard from './../PostCard.vue'

describe('PostCard', () => {
  it('component renders Hello world properly', () => {
    const wrapper = shallowMount(PostCard, {
      props: {
        post: {
          title: 'Hello world',
          id: 'hello-world',
          slug: 'helloWorld',
          category: {
            id: '',
            slug: 'hello',
            name: 'Hello',
            count: 0
          },
          intro: 'lorem ipsum'
        }
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
})
