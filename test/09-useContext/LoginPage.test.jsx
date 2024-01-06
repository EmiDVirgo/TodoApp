import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

const setUserMock = jest.fn();

describe('Pruebas en <LoginPage />', () => { 

  const user = {
    id: 1,
    name: 'Emile'
  }
  
  test('debe de mostrar el componente sin el usuario', () => { 

    render( 
      <UserContext.Provider value={ {user: null} }>
          <LoginPage /> 
      </UserContext.Provider>
      )

      const preTag = screen.getByLabelText('pre');
      expect(preTag.innerHTML).toBe( 'null' )
    

   });

   test('debe de llamar el setUser cuando se hace click en el boton', () => { 

    render( 
      <UserContext.Provider value={ {user:null, setUser: setUserMock} }>
          <LoginPage /> 
      </UserContext.Provider>
      )

      const buttonCall = screen.getByRole('button');
      fireEvent.click( buttonCall );
      expect( setUserMock ).toHaveBeenCalled();
      expect( setUserMock ).toHaveBeenCalledWith( { id:123, name: 'Emile', email:'emilejoel_05@hotmail.com' } );

    

   });
 })