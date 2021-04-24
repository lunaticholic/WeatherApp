import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading"
import * as Location from "expo-location";
import axios from "axios";

// openweathermap.org에서 회원 가입후 얻을 수 있는 API_KEY
const API_KEY = "c34ed4970e3f2fcb73ff8eb278a2f93e";

export default class extends React.Component {
  state ={
    isLoading: true
  }
  // 현재 위치를 가져올 함수
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async() => {
    try {
      // 이 녀석은 반드시 사용자에게 위치 정보를 제공할 허용여부를 물어본다.
      // 이걸 작성하고 저장하면 Simulator에서 바로 위치정보를 제공할거냐고 물어본다.
      await Location.requestForegroundPermissionsAsync();
      
      // 위치 정보를 불러올 녀석
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

      // API로 보내서 날씨정보를 받아올거임
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
    } catch {
      Alert.alert("너의 위치를 찾을 수 없네..", "넘나 슬픈것")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}