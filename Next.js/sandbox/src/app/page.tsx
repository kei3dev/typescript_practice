import { center } from "../../styled-system/patterns"

const HomePage = () => {
  return (
    <div
      className={center({
        minHeight: "screen",
        fontSize: "xl",
        fontWeight: "bold",
        md: {
          fontSize: "3xl",
        },
      })}
    >
      Hello 🐼!
    </div>
  )
}

export default HomePage
