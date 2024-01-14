
import React,{useEffect, useState} from 'react';
import {

    Text,
    FlatList,
    View,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';

import {DriverShort} from "../components/DriverCard";
import axios from "axios";
import {SearchComponent} from "../components/Search";
import {useSelector} from "react-redux";
import {DOMEN} from "../Const";


export const  DriverListScreen =({navigation})=> {
    const [isLoading,setIsLoading]=React.useState(true);
    const [driversList, setDriversList] = React.useState([]);
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const name_driver = useSelector((state) => state.search_driver.name);


    const fetchDrivers = async () => {
        setIsLoading(true);
        // Определяем параметры запроса, включая номер страницы и количество объектов на странице
        const params = new URLSearchParams({
            status: 'True',
            name: name_driver,
        });
        const url = `${DOMEN}api/drivers/search/?${params}`
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                signal: new AbortController().signal,
            });

            setDriversList(response.data);
            setIsLoading(false);
            setUpdateTrigger(false);

            // Log the received data
            console.log(response.data);
        } catch (error) {
            console.error("Ошибка!\n", error);
        }
    };

    useEffect(() => {
        fetchDrivers()
        if (updateTrigger) {
            // Вызываем код или обновление, которое должно произойти после успешного удаления
            // Например, здесь можно обновить список географических объектов или выполнить другие действия
            setUpdateTrigger(false);
        }
    }, [updateTrigger])
    const handleUpdateTriggerChange = (value) => {
        setUpdateTrigger(value);
    };

    return (

        <View>

            <SearchComponent name_driver={name_driver} updateTrigger={updateTrigger}
                             onUpdateTriggerChange={handleUpdateTriggerChange}/>
            <FlatList

                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchDrivers}/>}
                data={driversList.drivers}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DriverScreen', {id: item.id, title: item.title})}>
                        <DriverShort name={item.full_name} passport_number={item.passport_number}
                                     minioImageUrl={item.image}/>

                    </TouchableOpacity>
                )}
            />

        </View>

    );
}


