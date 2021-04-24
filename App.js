import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading"
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

// openweathermap.org에서 회원 가입후 얻을 수 있는 API_KEY
const API_KEY = "c34ed4970e3f2fcb73ff8eb278a2f93e";

export default class extends React.Component {
  state ={
    isLoading: true
  }
  // 현재 위치를 가져올 함수
  // 주소의 맨마지막 metric은 섭씨온도로 반환해주는 녀석
  getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather  }} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // temp는 현재위치의 날씨 온도를 가져올거임
    this.setState({ isLoading: false, condition: weather[0].main, temp });
  }
  getLocation = async() => {
    try {
      // 이 녀석은 반드시 사용자에게 위치 정보를 제공할 허용여부를 물어본다.
      // 이걸 작성하고 저장하면 Simulator에서 바로 위치정보를 제공할거냐고 물어본다.
      await Location.requestForegroundPermissionsAsync();
      
      // 위치 정보를 불러올 녀석
      const { coords: { latitude, longitude }, name } = await Location.getCurrentPositionAsync();

      // API로 보내서 날씨정보를 받아올거임
      this.getWeather(latitude, longitude)
    } catch {
      Alert.alert("너의 위치를 찾을 수 없네..", "넘나 슬픈것")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}