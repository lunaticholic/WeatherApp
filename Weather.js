import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// 화면 배경색 지정을 위한 공간
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "알아, 밖에 번개쳐",
        subtitle: "굳이 이 날씨에 밖을 나가야겠어?"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "개구리들이",
        subtitle: "노래 부르기 좋은 날씨네"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비.. 오는구나..",
        subtitle: "그 사람은 잘 지내나?"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "ELSA?",
        subtitle: "Do you wanna build a SNOWMAN?"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "우박이라고?",
        subtitle: "얼마나 두꺼우려나?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "날씨 엄청 좋구만",
        subtitle: "한량짓 하기 좋은 날씨네"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#108DC7", "#EF8E38"],
        title: "구름 낀 날씨라고?",
        subtitle: "커피숍에서 커피 한잔해야지"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "아지랑이 나올정도?",
        subtitle: "실내에 가만히 있자"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개가 나왔구만",
        subtitle: "운전할 때만 조심해야겠네"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "밖에 황사가 발생?",
        subtitle: "마스크 레디 고"
    }
}

export default function Weather({ temp, condition }) {
    return (
        // Background Linear Gradient 
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="#FFFFFF" />
                <Text style={styles.temp}>{temp}°</Text> 
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain"," Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});