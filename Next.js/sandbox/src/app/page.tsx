import { css } from "../../styled-system/css"

const HomePage = () => {
  return (
    <div
      className={css({
        display: "flex",
        minHeight: "screen",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3xl",
        fontWeight: "bold",
      })}
    >
      Hello 🐼!
    </div>
  )
}

export default HomePage
