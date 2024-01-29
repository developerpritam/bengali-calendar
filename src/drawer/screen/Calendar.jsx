import { View, Text, useColorScheme, ScrollView, Image, ActivityIndicator, TouchableOpacity, ToastAndroid, StyleSheet, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalStyle } from '../../globalStyle';
// import Video from 'react-native-video';
// import NativeAd from '../../components/NativeAd';
import { MyColor } from './Home';
// import PrevNext from 'react-native-vector-icons/MaterialCommunityIcons';
// import PlayPause from 'react-native-vector-icons/AntDesign';
import PlayPause from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native-gesture-handler';
// import NoInternet from '../../components/NoInternet';
// import InterAd from '../../components/InterAd';
// import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    // Simplest usage.
    url: 'https://digitalcalendar.in/wp-content/uploads/2023/04/PicsArt_04-06-06.22.03.webp',

    // width: number
    // height: 400,
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
},
{
    url: 'https://i.ytimg.com/vi/61ZX5tLWm78/maxresdefault.jpg',
    props: {
        // headers
    }
},

{
    url: 'https://i.ytimg.com/vi/aUIiZw1v3-g/maxresdefault.jpg',
    props: {
        // headers
    }
},

{
    url: 'https://digitalcalendar.in/wp-content/uploads/2023/04/PicsArt_23-04-06_18-13-29-243.webp',
    props: {
        // headers
    }
},

{
    url: 'https://i.ytimg.com/vi/_PZx2qCF39A/maxresdefault.jpg',
    props: {
        // headers
    }
},
]


const monthName = [
    {
        id: 1,
        Month: 'বৈশাখ',
    },
    {
        id: 2,
        Month: 'জ্যৈষ্ঠ',
    },
    {
        id: 2,
        Month: 'আষাঢ়',
    },
    {
        id: 2,
        Month: 'শ্রাবণ',
    },
    {
        id: 2,
        Month: 'ভাদ্র',
    },
    {
        id: 2,
        Month: 'আশ্বিন',
    },
    {
        id: 2,
        Month: 'কার্তিক',
    },
    {
        id: 2,
        Month: 'অগ্রহায়ণ',
    },
    {
        id: 2,
        Month: 'পৌষ',
    },
    {
        id: 2,
        Month: 'মাঘ',
    },
    {
        id: 2,
        Month: 'ফাল্গুন',
    },
    {
        id: 2,
        Month: 'চৈত্র',
    },
];

const indexNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const Calendar = ({ navigation, route }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const theme = useColorScheme();

    const handleMonthPress = (index) => {
        setSelectedImageIndex(index);
      };


    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>

            {/* <Image
                style={{ width: '100%', resizeMode: 'contain', aspectRatio: 1 }}
                source={{
                    uri: 'https://digitalcalendar.in/wp-content/uploads/2023/04/PicsArt_04-06-06.22.03.webp',
                }}
            /> */}

            {/* <Modal visible={true} transparent={true}> */}
            <View style={{height: 480, width: '100%',}}>
                <ImageViewer imageUrls={images} backgroundColor={{}} renderIndicator={() => null} style={{ width: '100%' }} index={selectedImageIndex} onChange={(index) => setSelectedImageIndex(index)} />
            </View>
            {/* </Modal> */}

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
                {/* <Text>Month</Text> */}

                {/* https://digitalcalendar.in/wp-content/uploads/2023/04/PicsArt_04-06-06.22.03.webp */}
                {monthName.map((monthName, index) => (
                    <View key={index} style={{}}>
                        {/* <View style={styles.menuItemStyle}> */}
                        {/* <FoodInfo food={food} />
                            <FoodImage food={food} /> */}
                        {/* </View> */}
                        {/* <Divider width={0.5} /> */}
                        <TouchableOpacity 
                        key={index}
                        onPress={() => handleMonthPress(index)}
                        >
                            <Text style={{ backgroundColor: 'red', color: 'white', fontSize: 18, fontWeight: 600, paddingVertical: 10, margin: 5, paddingHorizontal: 15, borderRadius: 8 }}>{monthName.Month}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Calendar

