import React, {useEffect, useState} from 'react';

import axios from "axios";
import {ActivityIndicator, Text, View} from "react-native";
import {Driver} from "../components/DriverCard";




export const DriverScreen = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [driver, setDriver] = useState();
    const {id,title} =route.params;



    useEffect(() => {
        navigation.setOptions(title);
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://172.20.10.6:8000/api/drivers/${id}/`);
                const fetchedDriver = response.data;
                setDriver(fetchedDriver);
            } catch (error) {
                console.log(error);
                alert('Error GET driver');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large"/>
                <Text>Загружается..</Text>
            </View>
        );
    }

    // Check if driver is defined before accessing its properties
    if (!driver) {
        return (
            <View>
                <Text>Driver not found.</Text>
            </View>
        );
    }

    return (
        // // <ImageBackground source={{uri:'http://172.20.10.6:46539/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null'}}
        //                  style={styles.backgroundImage}
        //                  onError={(error) => console.error('Image load error:', error.nativeEvent.error)}>
        <Driver
            full_name={driver.full_name}
            passport_number={driver.passport_number}
            minioImageUrl={driver.image}
            address = {driver.address}
            email={driver.email}

        />
        // </ImageBackground>
    );
};

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', // or 'stretch' or 'contain'
//         // justifyContent: 'center',
//         // alignItems: 'center',
//
//     }
// });