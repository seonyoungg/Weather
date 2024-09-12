import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './component/Box';
import CityBtn from './component/CityBtn';

/**
 * Weather Project 
 * 1. 앱 실행 시 현재 위치 기반의 날씨 확인
 * 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태
 * 3. 하단에는 5개의 버튼이 존재
 * - 1개는 현재 위치, 4개는 다른 도시
 * 4. 도시버튼 클릭 시 마다 해당 도시 날씨가 나타남
 * 5. 현재 위치의 경우 현재 위치 기반의 날씨가 나타남
 * 6. 데이터 로드 시 Loading 스피너
 */
function App() {

  const [weather, setWeather] = useState(null);
  const cities = ['paris','newyork','tokyo','seoul'];
  const [city,setCity] = useState('')

  //현재위치 정보가져오기
  const getCurrentLocation = ()=>{
    // console.log('getCurrentLocation');
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log('현재위치',lat, lon);

      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon)=>{
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3c83b0b1ee57f02190f751743bddf38&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(()=>{
    getCurrentLocation()
  },[]);

  return (
    <div className="weather-item-wrap">
      <div className="weather-item-box">
        <Box weather={weather}/>
        <CityBtn cities={cities} 
                 setCity={setCity}/>
      </div>
    </div>
  );
}

export default App;
