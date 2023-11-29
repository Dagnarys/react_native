import React from 'react';
import { StyleSheet, StatusBar,Text, Image, View } from 'react-native';
import styled from 'styled-components/native';

const Driver = styled.View`
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
export default function App() {
  return (
    <View>
        <Driver>
        <DriverImage source = {{ url:'https://i.stack.imgur.com/cXbga.png'}}/>
        <TextName>Asd</TextName>
        </Driver>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
