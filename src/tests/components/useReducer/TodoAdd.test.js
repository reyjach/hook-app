import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/useReducer/TodoAdd";

describe('Pruebas en el componenete TodoAdd', () => { 

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />);

    test('Debe de mostrarse correctamente', () => { 
        

        expect( wrapper ).toMatchSnapshot();

     });

     test('No debe de llamar a AddTodo', () => { 

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );


      });

      test('Debe de llamar a la funcion handleAddTodo', () => { 

        const value = 'Hola mundo';

        const input = wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            desc : value,
            done: false,
            id: expect.any(Number)
        } );
        expect( wrapper.find('input').prop('value') ).toBe('');

       });
       

 })