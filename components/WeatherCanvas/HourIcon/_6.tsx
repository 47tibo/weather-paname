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

export default function _6(props: any) {
  return (
      <Svg viewBox="30 0 419 850" preserveAspectRatio="xMidYMax slice" {...props}>
        <Defs>
          <RadialGradient
              id="prefix__b"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
          >
            <Stop offset="0%" stopColor="#FFB660" />
            <Stop offset="79.8%" stopColor="#FBF5EE" stopOpacity={0.6} />
            <Stop offset="100%" stopColor="#FAF3EB" stopOpacity={0} />
          </RadialGradient>
          <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="99.3%">
            <Stop offset="0%" stopColor="#0A2637" />
            <Stop offset="100%" stopColor="#749AB5" />
          </LinearGradient>
        </Defs>
        <G fill="none" fillRule="evenodd">
          <Path fill="url(#prefix__a)" d="M29 0h420v852H29z" />
          <G transform="translate(0 811)">
            <Circle cx={98} cy={94} r={94} fill="url(#prefix__b)" opacity={0.9} />
            <Circle cx={98} cy={110} r={98} fill="#FFB660" />
          </G>
        </G>
      </Svg>
  )
}