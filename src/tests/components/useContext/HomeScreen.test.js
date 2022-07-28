import { mount } from "enzyme";
import { HomeScreen } from "../../../components/useContext/HomeScreen";
import { UserContext } from "../../../components/useContext/UserContext";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

describe('Pruebas en el componente HomeScreen', () => { 

    Enzyme.configure({ adapter: new Adapter() });

    const user = {
        name:'Fernando',
        email: 'fernando342@gmail.com'
    }

    const wrapper = mount( 

        <UserContext.Provider value={[
            user
        ]}>
            <HomeScreen /> 
        </UserContext.Provider>

    );

    test('Debe de mostrarse correctamtente', () => { 
            
        expect( wrapper ).toMatchSnapshot();

     });

 });