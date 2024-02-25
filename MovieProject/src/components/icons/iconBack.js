import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { grayBackground, primaryWhite } from "../../constants/styles/colors"

const IconBack = (props) => (
    <Svg
        className="icon"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width={props?.width || 28}
        height={props?.height || 28}
        {...props}
    >
        <Path d="M662.613 233.387a32 32 0 0 1 0 45.226L429.227 512l233.386 233.387a32 32 0 1 1-45.226 45.226l-256-256a32 32 0 0 1 0-45.226l256-256a32 32 0 0 1 45.226 0z"
            fill={props?.color || primaryWhite}
        />
    </Svg>
)

export default IconBack
