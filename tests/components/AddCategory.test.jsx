import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    test('should be change input value', () => { 
        render(<AddCategory  onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: 'Margit' } });

        expect(input.value).toBe('Margit');
    });

    test('should be call onNewCategory if input has value', () => {
        const inputValue = 'Godrick';

        //Crea una simulacion de funcion para validar si fue llamada o no en el componente
        const onNewCategory = jest.fn();

        render(<AddCategory  onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        // screen.debug();
        expect(input.value).toBe('');

        //Funcion llamada o no 
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('should not be call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory  onNewCategory={ onNewCategory } />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //Funcion llamada o no 
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });

 });