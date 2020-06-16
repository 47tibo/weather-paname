import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Path,
  Use,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function _6(props: any) {
  return (
    <Svg viewBox="0 0 534 850" {...props}>
      <Defs>
        <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="99.3%">
          <Stop offset="0%" stopColor="#0A2637" />
          <Stop offset="100%" stopColor="#749AB5" />
        </LinearGradient>
        <Circle id="prefix__c" cx={126.5} cy={957.5} r={126.5} />
      </Defs>
      <G fill="none" fillRule="evenodd" transform="translate(60)">
        <Path fill="url(#prefix__a)" d="M54 0h420v852H54z" />
        <Circle cx={193.5} cy={180.5} r={3.5} fill="#FFF" opacity={0.3} />
        <Circle cx={266} cy={620} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={95} cy={631} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={185} cy={780} r={3} fill="#FFF" opacity={0.3} />
        <Circle cx={122} cy={416} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={151} cy={496} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={76} cy={251} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={268} cy={441} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={103} cy={114} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={302.5} cy={408.5} r={2.5} fill="#FFF" opacity={0.3} />
        <Circle cx={136} cy={81} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={256.5} cy={242.5} r={2.5} fill="#FFF" opacity={0.3} />
        <Circle cx={356} cy={821} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={359.5} cy={1.5} r={1.5} fill="#FFF" opacity={0.3} />
        <Circle cx={432} cy={443} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={331} cy={560} r={4} fill="#FFF" opacity={0.3} />
        <Circle cx={419.5} cy={772.5} r={1.5} fill="#FFF" opacity={0.3} />
        <Circle cx={249} cy={125} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={446} cy={523} r={2} fill="#FFF" opacity={0.3} />
        <Circle cx={400} cy={245} r={3} fill="#FFF" opacity={0.3} />
        <Circle cx={354.5} cy={79.5} r={3.5} fill="#FFF" opacity={0.3} />
        <Use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__c" />
        <Use fill="#FFB660" xlinkHref="#prefix__c" />
      </G>
    </Svg>
  )
}
