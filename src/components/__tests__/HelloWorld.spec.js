import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

test('HelloWorld.vue', () => {
    // render the component
    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Olá, mundo!',
        },
        
    });

    expect(wrapper.text()).toContain('HelloWorld');
    expect(wrapper.find('button').text()).toContain('count is 0');
    }
);