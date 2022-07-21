import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('prueba del componente KookApp', () => { 

    test('Debe de mostrat el componente KookApp', () => { 

        const wrapper = shallow(<HookApp />)

        expect( wrapper ).toMatchSnapshot();
     })
 })