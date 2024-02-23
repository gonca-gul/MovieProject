import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const IconSearch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={10.429} cy={10.429} r={7.429} stroke="#fff" />
    <Path
      fill="#fff"
      d="m16.068 15.36-.354-.353-.707.707.354.354.707-.707Zm4.578 5.994a.5.5 0 1 0 .708-.707l-.707.707Zm-5.285-5.286 5.285 5.286.708-.707-5.286-5.286-.707.707Z"
    />
  </Svg>
)
export default IconSearch
