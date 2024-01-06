const { renderHook } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter");
const { act } = require("react-dom/test-utils");



describe('Pruebas en el useCounter', () => { 

  test('Debe de retornar los valores por defecto', () => { 

   const { result } = renderHook( () => useCounter( ) );
   const { counter, decrement, increment, reset } = result.current;

   expect( counter ).toBe(10);
   expect( decrement ).toEqual( expect.any( Function ) );
   expect( increment ).toEqual( expect.any( Function ));
   expect( reset ).toEqual( expect.any( Function ));
   
   })

   test('Debe de generar el counter con el valor 100', () => { 


    const { result } = renderHook( () => useCounter(100) )
    const { counter, decrement, increment, reset } = result.current;

    expect( counter ).toBe(100);

  

    })

    test('debe de incrementar el contador', () => { 

      const { result } = renderHook( () => useCounter() )
      const { counter, increment } = result.current;

      act( () => {
        increment()
        increment(5);
      })
      

      expect( result.current.counter ).toBe(16)


     })

     test('debe de decrementar el contador', () => { 

      const { result } = renderHook( () => useCounter() )
      const { counter, decrement } = result.current;

      act( () => {
        decrement();
        decrement(2)
      })

      expect( result.current.counter ).toBe(7);

      })

      test('debe de realizar el reset', () => { 

        const { result } = renderHook( () => useCounter() )
        const { counter, increment, reset } = result.current;
        
        act( ()=> {
          increment(5)
          reset()
        } )

        expect( result.current.counter ).toBe(10)
       })
 });