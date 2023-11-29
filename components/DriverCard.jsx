import React from "react";
import styled from "styled-components/native";
import {ImageBackground, StyleSheet} from "react-native";
const DriverView = styled.View`
    position: relative;
    display: flex;
    margin: 10px;
    padding: 10px;
    margin-top:30px;
    border: 2px solid red;
    max-height: 100%;
    width: 395px;
    background-image:url("http://192.168.1.32:45243/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null");

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


export const Driver = ({full_name, passport_number, minioImageUrl,address,email}) => {
        return(

            <DriverView>

                    <DriverImage source = {{ url:minioImageUrl}}/>
                    <TextName>{full_name}</TextName>
                    <TextName>{passport_number}</TextName>
                    <TextName>{address}</TextName>
                    <TextName>{email}</TextName>

                </DriverView>

        )


}


