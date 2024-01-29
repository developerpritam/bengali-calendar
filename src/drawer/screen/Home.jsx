import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, StatusBar, ActivityIndicator, useColorScheme } from 'react-native'
import MyAds from '../../components/MyAds';
import Play from 'react-native-vector-icons/FontAwesome6';
import Favorite from 'react-native-vector-icons/MaterialIcons';
// import InterAd from '../../components/InterAd';
import { globalStyle } from '../../globalStyle';
import Calendar from 'react-native-vector-icons/Ionicons';
// import NoInternet from '../../components/NoInternet';

export const MyColor = {
  white: '#fff',
  fontColor: '#333',
  // primaryColor: '#6445ff',
  primaryColor: 'red',
  cardDarkBg: '#1F2125',
  secondaryColor: 'rgba(0,0,0,0.05)',
  thirdColor: 'rgba(255,255,255,0.05)',
  // lightmodeBg: '#F5F5F5',
  darkText: '#B6B6B6',
  darkmodeBg: '#181A1E',
  // darkModeText: '#777777',
  // darkTextTitle: '#A8A8A8',
  controlsBg: 'rgba(100,69,255,.6)',
  // drawerActiveBg: 'rgba(255, 0, 0, 0.3)'
}

const Home = ({ navigation }) => {
  // const [myUserData, setMyUserData] = useState();
  // const [isLoaded, setIsLoaded] = useState(true);
  const theme = useColorScheme();
  // const showInterstitialAd = InterAd();

  // const getUserData = async () => {
  //   try {
  //     const response = await fetch("https://thedailygardening.com/Usa%20Radio%20api/usaRadio.json");
  //     const myData = await response.json();
  //     setMyUserData(myData);
  //     setIsLoaded(false);
  //     // console.log(myData);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);


  return (
    <>
      <StatusBar barStyle={theme === 'light' ? "dark-content" : "light-content"} backgroundColor={theme === 'light' ? MyColor.white : MyColor.darkmodeBg} />
      <View style={[globalStyle.mainContainer, { backgroundColor: theme === 'light' ? MyColor.lightmodeBg : MyColor.darkmodeBg }]}>
        <View style={globalStyle.calendarWrapper}>
          <TouchableOpacity onPress={() => {navigation.navigate('Calendar')}}>
            <View style={globalStyle.card}>
              <Calendar name="calendar" size={85} color={MyColor.white} />
              <View style={{ height: 50 }}></View>
              <Text style={{ fontSize: 18, fontWeight: '500', backgroundColor: 'rgba(255,255,255,0.8)', paddingVertical: 5, borderRadius: 10, position: 'absolute', bottom: 8, width: '90%', textAlign: 'center' }}>ক্যালেন্ডার</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <View style={globalStyle.card}>
              <Calendar name="calendar" size={85} color={MyColor.white} />
              <View style={{ height: 50 }}></View>
              <Text style={{ fontSize: 18, fontWeight: '500', backgroundColor: 'rgba(255,255,255,0.8)', paddingVertical: 5, borderRadius: 10, position: 'absolute', bottom: 8, width: '90%', textAlign: 'center' }}>ফুল পঞ্জিকা</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default Home
