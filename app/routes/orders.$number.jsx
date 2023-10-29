import { useParams } from "@remix-run/react"

const DynamicOrderNumber = () => {

  const params = useParams();
  
  console.log('---PARAMS', params);
  
  return (
    <>
      <h1>Dynamic Order Number</h1>
      <h1>{`The order number is: ${params.number}`}</h1>
    </>
  )
}

export default DynamicOrderNumber;

/*
this is a dynamic route.
The URL could be /orders/2525
or /orders/222
or /orders/pizza
*/