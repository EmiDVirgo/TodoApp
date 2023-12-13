import { useCounter, useFetch } from "../hooks/";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote"




export const MultipleCustomHooks = () => {

  const {counter, increment, decrement} = useCounter(1);
  
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)

  
// console.log({data, isLoading, hasError})

const {quote, author} = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
          ? 
            <LoadingQuote />
           : 
            <Quote author={ author } quote={ quote } />
          
      }

      <button className="btn btn-dark"
       onClick={ () => increment() }
       disabled={ isLoading }
       >
       Next Random Quote
       </button>
      


    </>
  )
}
