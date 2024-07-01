import Accorditon from "./Component/Accorditon"

function App() {
  
  const data = [
    {id:1 , question: "What is React ?" , answer:"react is react"},
    {id:2 , question: "What is React ?" , answer:"react is react"},
    {id:3 , question: "What is React ?" , answer:"react is react"},
  ]

  return (
    <>
    <Accorditon data={data}/>
    </>
  )
}

export default App
