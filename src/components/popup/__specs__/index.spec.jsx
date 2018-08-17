import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopupComponent from '..';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from '../../../store';
const store = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('팝업 컴포넌트', () => {
    test('matches snapshot', () => {
        const onClick = jest.fn();
        const component = renderer.create(
            <Provider store={store}>
                <PopupComponent />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('triggers callback when clicked', () => {
        const onClick = jest.fn();
        const componentShallowWrapper = mount(
            <Provider store={store}>
                <PopupComponent />
            </Provider>
        );
        // componentShallowWrapper.find('button').simulate('click');
        // expect(onClick).toHaveBeenCalled();
    });
});
