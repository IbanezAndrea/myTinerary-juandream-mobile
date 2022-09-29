import { useEffect, useState, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native';



const HomeCarousel = (props) => {
    const dimension= Dimensions.get('window');
    const [selectedIndex, setSelectedIndex] = useState(0);
    let range = 4
    let [start, setStart] = useState(0)

    let citiesF = props.data
    let cities= citiesF?.slice(0, 12)

    let [end, setEnd] = useState(start + range)
    const interval = 5 * 1000
    const [intervalId, setIntervalId] = useState(null)

    
// para setear el intervalo de nuevo
    // function next() {
    //     if (end <= cities?.length - range) {
    //         setStart(start + range)
    //         setEnd(end + range)
    //         return
    //     }
    //     setStart(0)
    //     setEnd(range)
    // }

    // function prev() {
    //     if (start > 0) {
    //         setStart(start - range)
    //         setEnd(end - range)
    //         return
    //     }
    //     setStart(cities.length - range)
    //     setEnd(cities.length)
    // }
    // useEffect(() => {
    //     let id = setInterval(next, interval)
    //     setIntervalId(id)
    //     return () => clearInterval(intervalId)
    // }, [end])

    const setIndex = event => {
        let viewSize = event.nativeEvent.layoutMeasurement.width;
        let contentOffset = event.nativeEvent.contentOffset.x;
        let carouselIndex = Math.floor(contentOffset / viewSize);
        setSelectedIndex(carouselIndex);
    };
    

    
    return (
        <View style={{ width: '100%', marginTop: 40 }}>
            <ScrollView
                style={{ height: 400, width: '100%' }}
                horizontal
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={setIndex}
                pagingEnabled>
                {cities?.map((value, key) => (
                    <View style={{ height: '100%', width: dimension.width}}>
                        <ImageBackground
                            source={{ uri: `${value.photo}` }} key={value._id}
                            style={{ width: '100%', height: '100%', resizeMode: 'cover', flex: 1, justifyContent:'center' }}
                            PlaceholderContent={<ActivityIndicator />}>
                            <Text style={styles.city}>
                                {value.city}
                            </Text>
                            <Text style={styles.country}>
                                {value.country}
                            </Text>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>

            <View
        style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
        }}>
        {cities?.map((val, key) => (
            <Text
            key={key}
            style={key === selectedIndex ? {color: 'white', fontSize: 34} : {color: '#EABF9F', fontSize: 20}}>
            ◈ 
            </Text>
        ))}
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
city: {
    textAlign:'center',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10

},
country: {
    textAlign:'center',
    color: 'white',
    fontSize: 18
}

});

export default HomeCarousel;