import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/useReducer/TodoListItem";
import { demoTodo } from "../../fixture/demoTodo";

describe('Pruebas en el componente TodoListItem', () => { 

    

    const handleDelete = jest.fn();

    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo={ demoTodo[ 0 ] }
            i={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    beforeEach ( () => { 
        jest.clearAllMocks();

        const wrapper = shallow(
            <TodoListItem 
                todo={ demoTodo[ 0 ] }
                i={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />
        )
    })
    

    test('Debe de mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();

     });

     test('Debe de llamr a la funcion borrar', () => {

        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);


     });

     test('Debe de llamar a la funcion toogle', () => { 

        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);

      });

      test('Debe de mostrar el texto correcto', () => { 


        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe(`${ 0 + 1 }. ${ demoTodo[0].desc }`);

       });

       test('Debe de tener la clase de Complete', () => { 

        const todo = demoTodo[0];

        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo={ todo }
                i={0}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);


        })
 })