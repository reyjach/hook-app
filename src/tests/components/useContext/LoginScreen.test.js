import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { mount } from "enzyme";
import { Simulate } from 'react-dom/test-utils';

import { LoginScreen } from '../../../components/useContext/LoginScreen';
import { UserContext } from "../../../components/useContext/UserContext";

describe('Pruebas en el componente LoginScreen', () => {

    const setUser = jest.fn();

    Enzyme.configure({ adapter: new Adapter() });



    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();

     });

     test('Debe de ejecutar el setUser con el argumento esperado', () => { 


        wrapper.find('button').simulate('click');

        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'carlos',
            email: 'carlos23@gmail.com'
        });
     })

 })