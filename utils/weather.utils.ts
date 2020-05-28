export function temperature(temp: number): string {
  return temp === null ? '' : Math.round(temp).toString();
}

export function windSpeed(speed: number): string {
  return `${Math.round(speed * 3.6)} km/h`;
}

// https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b
export function windDirection(deg: number): string {
  if (deg>11.25 && deg<33.75){
    return 'NNE';
  }else if (deg>33.75 && deg<56.25){
    return 'ENE';
  }else if (deg>56.25 && deg<78.75){
    return 'E';
  }else if (deg>78.75 && deg<101.25){
    return 'ESE';
  }else if (deg>101.25 && deg<123.75){
    return 'ESE';
  }else if (deg>123.75 && deg<146.25){
    return 'SE';
  }else if (deg>146.25 && deg<168.75){
    return 'SSE';
  }else if (deg>168.75 && deg<191.25){
    return 'S';
  }else if (deg>191.25 && deg<213.75){
    return 'SSO';
  }else if (deg>213.75 && deg<236.25){
    return 'SO';
  }else if (deg>236.25 && deg<258.75){
    return 'OSO';
  }else if (deg>258.75 && deg<281.25){
    return 'O';
  }else if (deg>281.25 && deg<303.75){
    return 'ONO';
  }else if (deg>303.75 && deg<326.25){
    return 'NO';
  }else if (deg>326.25 && deg<348.75){
    return 'NNO';
  }else{
    return 'N';
  }
}
