import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { mount } from "enzyme";
import { AppRouter } from '../../../components/useContext/AppRouter';
import { UserContext } from "../../../components/useContext/UserContext";

describe('Pruebas en el componente AppRouter', () => { 

    Enzyme.configure({ adapter: new Adapter() });

    const user = {
        id: 123,
        name: 'carlos',
        email: 'carlos23@gmail.com'
    }


    const wrapper = mount(
        <UserContext.Provider value={[
            user
        ]}>
           <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
     })
 })