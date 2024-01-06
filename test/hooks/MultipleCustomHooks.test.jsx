import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter";


jest.mock('../../src/hooks/useCounter')
jest.mock('../../src/hooks/useFetch');

describe('Pruebas realizadas en <MultipleCustomHooks />', () => { 

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue( {
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( ()=>{
    jest.clearAllMocks();
  } )

  test('debe de mostrar el componente por defecto', () => { 

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render( <MultipleCustomHooks />);

    expect( screen.getByText('Loading...'))
    expect( screen.getByText('Breaking Bad Quotes'))

    const nextButton = screen.getByRole('button', {name: 'Next Random Quote'});
    expect(nextButton.disabled).toBeTruthy();
    

    screen.debug();
   })

   test('Debe de mostrar un Quote', () => { 

    useFetch.mockReturnValue({
      data: [{author: 'Emile', quote: 'Hola Mundo'}],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHooks /> );
    
    expect( screen.getByText('Hola Mundo')).toBeTruthy();
    expect( screen.getByText('Emile')).toBeTruthy();

    const nextButton = screen.getByRole('button',{ name: 'Next Random Quote'});
    expect(nextButton.disabled).toBeFalsy();
    
    });

    test('debe de llamar la funcion de incrementar', () => { 

      

      useFetch.mockReturnValue({
        data: [{author: 'Emile', quote: 'Hola Mundo'}],
        isLoading: false,
        hasError: null
      });

      
  
      render( <MultipleCustomHooks /> );
      const nextButton = screen.getByRole('button',{ name: 'Next Random Quote'});
      fireEvent.click( nextButton )

      expect( mockIncrement ).toHaveBeenCalled();

     });
 })