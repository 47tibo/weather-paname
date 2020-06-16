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

export default function _20(props: any) {
    return (
        <Svg viewBox="0 0 420 850" preserveAspectRatio="xMidYMax slice" {...props}>
            <Defs>
                <RadialGradient
                    id="prefix__b"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="0%" stopColor="#FAA95E" />
                    <Stop offset="79.8%" stopColor="#FBF5EE" stopOpacity={0.6} />
                    <Stop offset="100%" stopColor="#FAF3EB" stopOpacity={0} />
                </RadialGradient>
                <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="99.3%">
                    <Stop offset="0%" stopColor="#4B9DC6" />
                    <Stop offset="100%" stopColor="#FCCDAC" />
                </LinearGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path fill="url(#prefix__a)" d="M0 0h420v852H0z" />
                <G transform="translate(100 708)">
                    <Circle
                        cx={213}
                        cy={213}
                        r={213}
                        fill="url(#prefix__b)"
                        opacity={0.9}
                    />
                    <Circle cx={213} cy={213} r={129} fill="#FAA95E" />
                </G>
            </G>
        </Svg>
    )
}