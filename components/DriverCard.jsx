import React from "react";
import styled from "styled-components/native";
import {Image, ImageBackground, StyleSheet, View} from "react-native";
const DriverView = styled.View`
    position: relative;
    display: flex;
    padding: 10px;
    border: 2px solid red;
    max-height: 100%;
    align-items: center;
    ;
    background-repeat: no-repeat;
    flex-direction: row;
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
    margin-bottom: 10px;
  
`;
const DriverBackground = styled.View`
   background-size: cover; /* This will make sure the background image covers the entire component */
  /* Add more styles as needed */
  /* For example: */
  width: 100%;

  padding: 10px;
  
`;
const styles = StyleSheet.create({

    textContainer: {
        flexDirection: 'column',

    },

});


export const Driver = ({name, passport_number, minioImageUrl,address,email}) => {
        return(
            <DriverBackground>
                <DriverView >
                    <DriverImage source = {{ uri:minioImageUrl}}/>
                    <View style = {styles.textContainer}>
                        <TextName>{name}</TextName>
                        <TextName>{passport_number}</TextName>
                        <TextName>{address}</TextName>
                        <TextName>{email}</TextName>


                    </View>
                </DriverView>
            </DriverBackground>

        )
}

export const DriverShort = ({name, passport_number,minioImageUrl}) => {
    // Первый экран, где вы хотите отобразить только часть данных
    const driverData = {
        name: name,
        passport_number: passport_number,
        minioImageUrl: minioImageUrl
    };

    return (
       <Driver {...driverData} />
    );
};


export const DriverFull = ({name, passport_number, minioImageUrl,address,email}) => {
    // Второй экран, где вы хотите отобразить все данные
    const driverData = {
        name: name,
        passport_number:passport_number,
        minioImageUrl: minioImageUrl,
        address: address,
        email: email,
    };

    return (
        <Driver {...driverData}/>
    );
};

