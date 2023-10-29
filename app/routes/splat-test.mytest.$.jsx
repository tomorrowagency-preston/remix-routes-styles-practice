import { useParams } from "@remix-run/react"

const SplatTest = () => {

  const params = useParams();

  console.log('---PARAMS', params); // /splat-test/mytest/cats/dogs/fish  >>  "*": "cats/dogs/fish"

  return (
    <>
      <h1>Splat Test</h1>
    </>
  )
}

export default SplatTest;

/*
splat routes will resolve for any path after $
None of these would throw 404:

/splat-test/mytest/cats/dogs/fish
/splat-test/mytest/123/
/splat-test/mytest/test/new/profile/test
/splat-test/mytest/

this will throw 404: /splat-test/
*/