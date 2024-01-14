import React from 'react';
import {useDispatch} from "react-redux";
import {updateDriver} from "../store/SearchDriver";
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const SearchComponent = ({name_driver, updateTrigger, onUpdateTriggerChange}) => {
    const dispatch = useDispatch();
    const handleChange = (search_driver) => {
        dispatch(updateDriver(search_driver));
    };
    const pressButton = () => {
        onUpdateTriggerChange(true);
    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Поиск по фио"
                value={name_driver}
                onChangeText={(text) => handleChange(text)}
                onSubmitEditing={pressButton}
            />
            {/*{ <Button title="Поиск" onPress={handleSearch} />}*/}
        </View>
    );
};



const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,

    },
});

export default SearchComponent;
