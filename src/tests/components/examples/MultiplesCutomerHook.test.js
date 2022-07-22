import { shallow } from "enzyme";
import { MultiplesCutomerHook } from "../../../components/examples/MultiplesCutomerHook";
import { useCounter } from "../../../hooks/useCounter";
import { useFech } from "../../../hooks/useFech";

jest.mock("../../../hooks/useFech");
jest.mock("../../../hooks/useCounter");

describe('probar en el componente MultiplesCutomerHook', () => { 

    
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 8,
            increment: () =>{},
        });
    });

    test('Debe de mostrarse correctamente', () => { 

        useFech.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultiplesCutomerHook /> );

        expect( wrapper ).toMatchSnapshot();

     });

     test('Debe de mostrar la informacion', () => { 

        useFech.mockReturnValue({
            data:[{
                author:'Jesica',
                quote:'hola mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultiplesCutomerHook /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'hola mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Jesica' );


      })
 })