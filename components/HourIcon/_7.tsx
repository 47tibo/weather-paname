import * as React from "react"
import Svg, {
    Defs,
    RadialGradient,
    Stop,
    LinearGradient,
    G,
    Path,
    Circle,
} from "react-native-svg"

export default function _7(props: any) {
    return (
        <Svg viewBox="8 0 420 850" preserveAspectRatio="xMidYMax slice" {...props}>
            <Defs>
                <RadialGradient
                    id="prefix__b"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="0%" stopColor="#FED5A4" />
                    <Stop offset="79.8%" stopColor="#FBF5EE" stopOpacity={0.6} />
                    <Stop offset="100%" stopColor="#FAF3EB" stopOpacity={0} />
                </RadialGradient>
                <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="99.3%">
                    <Stop offset="0%" stopColor="#124665" />
                    <Stop offset="100%" stopColor="#86B0CF" />
                </LinearGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path fill="url(#prefix__a)" d="M8 0h420v852H8z" />
                <Circle
                    cx={104.5}
                    cy={858.5}
                    r={104.5}
                    fill="url(#prefix__b)"
                    opacity={0.9}
                />
                <Circle cx={106} cy={863} r={98} fill="#FED5A4" />
            </G>
        </Svg>
    )
}