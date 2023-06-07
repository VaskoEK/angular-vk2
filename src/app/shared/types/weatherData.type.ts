export type WeatherData = {
    lat:number,
    lon:number,
    timezone:string,
    timezone_offset:number,
    current:{
      dt:number,
      sunrise:number,
      sunset:number,
      temp:number,
      feels_like:number,
      pressure:number,
      humidity:number,
      dew_point:number,
      uvi:number,
      clouds:number,
      visibility:number,
      wind_speed:number,
      wind_deg:number,
      wind_gust:number,
      weather:Weather[]
    },
    alerts: WeatherAlert[]
}


export type Weather =  {
    id:number,
    main:string,
    description:string,
    icon:string
};

export type WeatherAlert = {
  sender_name: string,
  event: string,
  start: number,
  end: number,
  description: string,
  tags: any[]
}