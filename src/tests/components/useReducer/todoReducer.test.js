import { todoReducer } from "../../../components/useReducer/todoReducer";
import { demoTodo } from "../../fixture/demoTodo";



describe('pruebas en el componente todoReducer', () => { 

    test('Debe de retornar el estado por defecto', () => { 

        const state = todoReducer( demoTodo, {});

        expect( state ).toEqual( demoTodo );

    });

    test('Debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload : newTodo
        };

        const state = todoReducer( demoTodo, action)
        
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodo, newTodo]);


    });

    test('Debe de borrar un TOdo', () => { 

        const id = 3;

        const action = {
            type: 'delete',
            payload : id
        };

        const state = todoReducer( demoTodo, action)
        
        expect( state.length ).toBe( 2 );
     });

     test('Debe de hacer el TOGGLE al todo', () => { 

        const id = 1;

        const action = {
            type: 'toggle',
            payload : id
        };

        const state = todoReducer( demoTodo, action);


        
        expect( state[id -1 ].done ).toBe( true );
        

      })
    
 })