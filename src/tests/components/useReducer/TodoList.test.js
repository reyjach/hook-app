import { shallow } from "enzyme";
import { TodoList } from "../../../components/useReducer/TodoList";

import { demoTodo } from "../../fixture/demoTodo";


describe('pruebas en el componente TodoList', () => { 

    const handleDelete = jest.fn();

    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos = {demoTodo}
            handleToggle = {handleToggle}
            handleDelete = {handleDelete}
        />
    )

    beforeEach ( () => { 
        jest.clearAllMocks();

        const wrapper = shallow(
            <TodoList 
                todos = {demoTodo}
                handleToggle = {handleToggle}
                handleDelete = {handleDelete}
            />
        )
    });

    test('Debe de mosrtrarse correctamamente', () => { 

        expect( wrapper ).toMatchSnapshot();


     });

     test('Debe de tener dos TodoList', () => { 

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodo.length );

        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );

      })
 })