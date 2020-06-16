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

export default function _8(props: any) {
    return (
        <Svg viewBox="14 0 420 850" preserveAspectRatio="xMidYMax slice" {...props}>
            <Defs>
                <RadialGradient
                    id="prefix__b"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="0%" stopColor="#FFE8CD" />
                    <Stop offset="79.8%" stopColor="#FBF5EE" stopOpacity={0.6} />
                    <Stop offset="100%" stopColor="#FAF3EB" stopOpacity={0} />
                </RadialGradient>
                <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="99.3%">
                    <Stop offset="0%" stopColor="#4B9DC6" />
                    <Stop offset="100%" stopColor="#56C5FA" />
                </LinearGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path fill="url(#prefix__a)" d="M14 0h420v852H14z" />
                <G transform="translate(0 628)">
                    <Circle
                        cx={126.5}
                        cy={126.5}
                        r={126.5}
                        fill="url(#prefix__b)"
                        opacity={0.9}
                    />
                    <Circle cx={126} cy={126} r={98} fill="#FFE8CD" />
                </G>
            </G>
        </Svg>
    )
}