import React, {useEffect, useState} from 'react';

import axios from "axios";
import {ActivityIndicator, Text, View} from "react-native";
import {Driver, DriverFull} from "../components/DriverCard";
import {DOMEN} from "../Const";




export const DriverScreen = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [driver, setDriver] = useState();
    const {id,title} =route.params;



    useEffect(() => {
        navigation.setOptions(title);
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${DOMEN}api/drivers/${id}/`);
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


    if (!driver) {
        return (
            <View>
                <Text>Driver not found.</Text>
            </View>
        );
    }

    return (

        <DriverFull
            name={driver.name}
            passport_number={driver.passport_number}
            minioImageUrl={driver.image}
            address = {driver.address}
            email={driver.email}

        />

    );
};

