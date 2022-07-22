import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/useRef/RealExampleRef";

describe('Pruebas en el componente RealExampleRef', () => { 

    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => { 

        

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultiplesCutomerHook').exists() ).toBe(false);

     });

     test('Debe de mostrar el componente MultiplesCutomerHook', () => { 

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultiplesCutomerHook').exists() ).toBe(true);


     })
 })