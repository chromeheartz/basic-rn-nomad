import * as Location from "expo-location";

import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";

// 창의 크기를 가져온다
// object안에 있는 width를 가져오고 그것을 SCREEN_WIDTH로 바꾼것
const { width: SCREEN_WIDTH } = Dimensions.get("window");
// console.log(width);

export default function App() {
  const [city, setCity] = useState("Loading..");
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    // console.log(permission)
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    // console.log(location)
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city)
  };
  useEffect(() => {
    ask();
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
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 38,
    fontWeight: "600",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 168,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
