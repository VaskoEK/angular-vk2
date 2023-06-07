import { Injectable } from '@angular/core';
import { Coords } from 'src/app/shared/types/coords.type';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MockService } from '../../mock/mock.service';
import { WeatherData } from 'src/app/shared/types/weatherData.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient, private readonly mock: MockService) { }


  getWeatherData(coords:Coords):Observable<WeatherData>{
    let data:any = coords;
    data['exclude'] = "hourly,daily,minutely";
    if(environment.weatherAPI.mockAPI){
      return this.mock.mockWeatherData();
    }else{
      return this.getRequest(environment.weatherAPI.apiUrl+environment.weatherAPI.endpoints.getCurrentWeather,true, data);
    }

  }


  private getRequest(path:string, authNeeded: boolean, params?:any,):Observable<any>{

    let queryParams = new HttpParams();
    if(authNeeded){
      queryParams = queryParams.append('appid',environment.weatherAPI.apiKey);

    }
    if(params){
      Object.keys(params).forEach(key => {
        queryParams = queryParams.append(key, params[key]);
      });
    }
    return this.http.get(path,{params:queryParams})
  }
}