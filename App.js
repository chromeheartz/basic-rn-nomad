import * as Location from "expo-location";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

// 창의 크기를 가져온다
// object안에 있는 width를 가져오고 그것을 SCREEN_WIDTH로 바꾼것
const { width: SCREEN_WIDTH } = Dimensions.get("window");
// console.log(width);

const API_KEY = "4253ae16213a301c895a18c443e60b35";

export default function App() {
  const [city, setCity] = useState("Loading..");
  //
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    // console.log(permission)
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    // console.log(latitude, longitude)
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    // console.log(json.daily);
    setDays(json.daily);
    console.log("---------------------------");
    // console.log(json.daily)
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        // showsHorizontalScrollIndicator={false}
        indicatorStyle={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{
                marginTop: 10,
              }}
            />
          </View>
        ) : (
          days.map((day, index) => {
            const date = new Date(day.dt * 1000).toString().substring(0, 10)
            return (
              <View key={index} style={styles.day}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}
                  <Text style={styles.tempIcon}>
                    &#8451;
                  </Text>
                </Text>
                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyDescription}>{day.weather[0].description}</Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
  },
  city: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 38,
    fontWeight: "600",
    color: "white"
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    color: "white"
  },
  date: {
    fontSize: 28,
    color: "white"
  },
  temp: {
    marginTop: 10,
    fontSize: 108,
    color: "white"
  },
  tempIcon: {
    fontSize: 80,
    color: "white"
  },  
  description: {
    marginTop: 10,
    fontSize: 60,
    color: "white"
  },
  tinyDescription: {
    marginTop: 5,
    fontSize: 30,
    color: "white"
  }
});
