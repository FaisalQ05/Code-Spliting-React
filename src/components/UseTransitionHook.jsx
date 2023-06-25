import { useState, useTransition } from "react"

const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  let LIST_SIZE = 20000
  const handleInputEvent = (e) => {
    setInput(e.target.value)
    startTransition(() => {
      const I = []
      for (let i = 0; i < LIST_SIZE; i++) {
        I.push(e.target.value)
      }
      setList(I)
    })
  }
  return (
    <>
      <input type="text" value={input} onChange={handleInputEvent} />
      {isPending ? (
        <h1>...Loading</h1>
      ) : (
        list.map((item, index) => <p key={index}>{item}</p>)
      )}
    </>
  )
}

export default UseTransitionHook
