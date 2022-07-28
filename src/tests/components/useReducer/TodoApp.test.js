import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/useReducer/TodoApp";
import { demoTodo } from "../../fixture/demoTodo";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

describe('Pruebas en el componente TodoApp', () => { 

    Enzyme.configure({ adapter: new Adapter() });

    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn()

    test('Debe de mostrarse correctamente', () => { 
        

        expect( wrapper ).toMatchSnapshot();

     });

     test('Debe de agregar un Todo', () => { 

        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodo[1]);
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');

        //expect( localStorage.setItem).toBeCalledWith({});

        
        expect( localStorage.setItem).toHaveBeenCalledTimes(2);

        
        
      });

      test('Debe de eliminar un todo', () => { 

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');

       })

 })