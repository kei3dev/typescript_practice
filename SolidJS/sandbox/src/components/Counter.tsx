import { createSignal } from "solid-js"

export const Counter = () => {
  const [count, setCount] = createSignal(0)
  return (
    <button
      class="w-[200px] rounded-full border-2 border-gray-300 bg-gray-100 px-[2rem] py-[1rem] active:border-gray-400 focus:border-gray-400"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  )
}
