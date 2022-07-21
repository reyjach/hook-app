import { renderHook, act } from "@testing-library/react"
import { useForm } from "../../hooks/useForm";


describe('pruebas en el useForm', () => { 

    const initialForm = {
        name: 'carlos',
        email: 'carlos23@gmail.com'
    };

    test('Debe de regresar un fomulario por defecto', () => { 

        const { result }= renderHook( () => useForm(initialForm));

        const [ value,handle, reset] = result.current;

        expect( value ).toEqual(initialForm);
        expect ( typeof handle).toBe('function');
        expect ( typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del fomulario (name)', () => { 

        const name = 'melissa'

        const change = {
            target:{
                name:'name',
                value:name
            }
        };

        const { result }= renderHook( () => useForm(initialForm));

        const [ ,handle ] = result.current;

        act( () => {
            handle(change);
        });

        const [ value,, ] = result.current;

        expect( value ).toEqual({ ...initialForm, name })


     });

     test('Debe de restablecer el fomulario', () => { 
        const { result }= renderHook( () => useForm(initialForm));

        const [ ,,reset ] = result.current;

        act( () => {
            reset();
        });

        const [ value ] = result.current;


        expect( value ).toEqual(initialForm);
      })
 })