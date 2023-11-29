import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import axios from "axios";
import {ActivityIndicator, ImageBackground, StyleSheet, Text, View} from "react-native";
import {Driver} from "../components/DriverCard";

const DriverView = styled.View`
    position: relative;
    display: flex;
    margin: 10px;
    padding: 10px;
    margin-top:30px;
    border: 2px solid red;
    max-height: 100%;
    width: 395px;

    border-radius: 10px; /* Увеличил радиус закругления углов */
    /*background-color: rgb(206, 170, 170);*/
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Добавил тень для карточек */
    transition: transform 0.2s ease-in-out; /* Анимация при наведении курсора */
`;
const DriverImage = styled.Image`
    width:150px;
    height:150px;
    border-radius:12px;
    margin-right:12px;

`;
const TextName = styled.Text`
    font-size:16px;
    font-weight:700;
`;


export const DriverScreen = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [driver, setDriver] = useState();
    const {id,title} =route.params;



    useEffect(() => {
        navigation.setOptions(title);
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://192.168.1.32:8000/api/drivers/${id}/`);
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
        <ImageBackground source={{uri:'http://192.168.1.32:45243/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9jYXIuanBn&version_id=null'}}
                         style={styles.backgroundImage}
                         onError={(error) => console.error('Image load error:', error.nativeEvent.error)}>
            <Driver
                full_name={driver.full_name}
                passport_number={driver.passport_number}
                minioImageUrl={driver.image}
                address = {driver.address}
                email={driver.email}

            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
        alignItems: 'center',

    }
});