import * as React from "react"
import Svg, {
    Defs,
    RadialGradient,
    Stop,
    G,
    Path,
    Circle,
} from "react-native-svg"

export default function _13(props: any) {
    return (
        <Svg viewBox="0 0 420 850" preserveAspectRatio="xMidYMax slice" {...props}>
            <Defs>
                <RadialGradient
                    id="prefix__a"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="0%" stopColor="#FDFAF6" />
                    <Stop offset="79.8%" stopColor="#FBF5EE" stopOpacity={0.6} />
                    <Stop offset="100%" stopColor="#FAF3EB" stopOpacity={0} />
                </RadialGradient>
            </Defs>
            <G fill="none" fillRule="evenodd">
                <Path fill="#56C5F9" d="M0 0h420v852H0z" />
                <G transform="translate(71 166)">
                    <Circle
                        cx={162}
                        cy={162}
                        r={162}
                        fill="url(#prefix__a)"
                        opacity={0.9}
                    />
                    <Circle cx={162} cy={162} r={98} fill="#FAF3EB" />
                </G>
            </G>
        </Svg>
    )
}