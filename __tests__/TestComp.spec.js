import { mount } from '@vue/test-utils'
import TestComp from '@/components/TestComp.vue'

describe('display count', () => {
    test('check init value', () => {
        const wrapper = mount(TestComp)
        // $data 動いちゃったァ・・・
        expect(wrapper.vm.$data.count).toEqual(0)
    })

    test('check incremented value', () => {
        const wrapper = mount(TestComp)
        wrapper.find('button').trigger('click')

        // こっちも通るんかーい
        expect(wrapper.vm.count).toEqual(1)
    })
})
