import React from "react";
import {WeatherConditionImageProps} from "./WeatherConditionImageProps";
import {Image, View} from "react-native";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {WeatherConditionImageEnum} from "../../constants/WeatherConditionImageEnum";
import {AWS_URL} from "../../api/api.constants";

const fullWidth = responsiveWidth(100);

const iconsUri = new Map<WeatherConditionImageEnum, string>([
    [WeatherConditionImageEnum.FewClouds, 'FewClouds/FewClouds.png'],
    [WeatherConditionImageEnum.BrokenClouds, 'BrokenClouds/BrokenClouds.png'],
    [WeatherConditionImageEnum.Mist, 'Mist/Mist.png'],
    [WeatherConditionImageEnum.Rain, 'Rain/Rain.png'],
    [WeatherConditionImageEnum.ScatteredClouds, 'ScatteredClouds/ScatteredClouds.png'],
    [WeatherConditionImageEnum.ShowerRain, 'ShowerRain/ShowerRain.png'],
    [WeatherConditionImageEnum.Thunderstorm, 'Thunderstorm/Thunderstorm.png'],
    [WeatherConditionImageEnum.Snow, 'Snow/Snow.png'],
]);

export const WeatherConditionImage: React.FC<WeatherConditionImageProps> = (props) => {
    if (props.iconCode === WeatherConditionImageEnum.ClearSky) {
        return <View/>;
    } else {
        return (
            <Image source={{uri: `${AWS_URL}${iconsUri.get(props.iconCode)}`}}
                   resizeMode={'cover'}
                   style={[props.style, {width: fullWidth, height: '100%'}]}
            />
        );
    }
}