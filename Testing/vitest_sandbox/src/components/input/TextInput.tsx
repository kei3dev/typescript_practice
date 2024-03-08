import { useState } from "react"

export const TextInput = () => {
  const [text, setText] = useState("")
  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="enter some text"
      />
      <p>{text}</p>
    </>
  )
}
