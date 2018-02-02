import {mount} from '@vue/test-utils';
import VueRegexInput from '../src/index.vue';

describe('VueRegexInput', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(VueRegexInput).not.toThrow();
    });
  });

 /* test('is a Vue instance', () => {

    const wrapper = mount(VueRegexInput, {
      propsData: {
        value: 'bar',
      },
    });

    wrapper.setData({ val: 'bar' });

    expect(mount(wrapper).isVueInstance()).toBeTruthy();
  });*/
});
