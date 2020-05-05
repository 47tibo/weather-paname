import * as React from 'react';
import useAxios from 'axios-hooks';
import {WEATHER_URL} from '../constants';
import {useNetInfo} from '@react-native-community/netinfo';

export function useWeather() {
  const [{ getData }, executeGet] = useAxios(
    WEATHER_URL, { manual: true }
  );
  const netInfo = useNetInfo();
  const [getPending, setGetPending] = React.useState(false);
  
  function getWeather() {
    executeGet();
    setGetPending(true);
  }
  
  React.useEffect(() => {
    if (getPending) {
      if (netInfo.isConnected) {
        setGetPending(false);
      } else {
        const id = setInterval(executeGet, 1000);
        return () => clearInterval(id);
      }
    }
  }, [getPending, netInfo, executeGet]);
  
  return [getData, getWeather];
}
