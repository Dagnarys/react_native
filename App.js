import React from 'react';
import {

    Text,
    FlatList,
    View,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import {Driver} from "./components/DriverCard";
import axios from "axios";


export default function App() {
    const [isLoading,setIsLoading]=React.useState(true);
    const [drivers, setDrivers] = React.useState([]);

    const fetchDrivers =() =>{
        setIsLoading(true);
        axios
            .get('http://192.168.1.32:8000/api/drivers/search/')
            .then(response => {
                // Access the drivers array from the response data
                const fetchedDrivers = response.data.drivers;
                setDrivers(fetchedDrivers);
            })
            .catch(err => {
                console.log(err);
                alert('Error GET drivers');
            }).finally(()=>{
                setIsLoading(false);
        });

    }

    React.useEffect(fetchDrivers,[]);


    if(isLoading){
        return <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <ActivityIndicator size="large"/>
            <Text>Загружается..</Text>

        </View>
    }


    return (
        <View>

            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchDrivers}/>}
                data = {drivers}
                renderItem={({item}) => (
                    <TouchableOpacity>
                    <Driver full_name={item.full_name} passport_number = {item.passport_number} minioImageUrl = {item.image}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


