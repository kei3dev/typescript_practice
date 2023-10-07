import { css } from "../../styled-system/css"

const HomePage = () => {
  return (
    <div
      className={css({
        display: "flex",
        minHeight: "screen",
        justifyContent: "center",
        alignItems: "center",
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
