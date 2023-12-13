import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>

      <hr />

      <button className='btn btn-success' 
      onClick={ () => increment(2) }
        >+1</button>
      <button className='btn btn-warning' 
      onClick={ reset }
        >Resset</button>
      <button className='btn btn-dark' 
      onClick={ () => decrement(2) }
        >-1</button>
    </>
  )
}
