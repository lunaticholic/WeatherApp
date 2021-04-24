import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// 화면 배경색 지정을 위한 공간
const weatherOptions = {
    Thunderstorm: {
        iconName: "",
        gradient: []
    },
    Drizzle: {
        iconName: "",
        gradient: []
    },
    Rain: {
        iconName: "",
        gradient: []
    },
    Snow: {
        iconName: "",
        gradient: []
    },
    Atmosphere: {
        iconName: "",
        gradient: []
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: "",
        gradient: []
    },
    Haze: {
        iconName: "dehaze",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Mist: {
        iconName: "",
        gradient: []
    },
    Dust: {
        iconName: "",
        gradient: []
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
            <View style={styles.halfContainer}>
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
    }
});