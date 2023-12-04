import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DriverListScreen} from "./DriverListScreen";
import {DriverScreen} from "./DriverScreen";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();


//<Routes> ... </Routes> => stack.nav
export const Navigation = () =>{
    return (

        <NavigationContainer>
            <Stack.Navigator>

                    <Stack.Screen name="DriverListScreen" component={DriverListScreen} options={{title:'Водители'}}/>
                    <Stack.Screen name="DriverScreen" component={DriverScreen} options={{title:'Водитель'}}/>


            </Stack.Navigator>
        </NavigationContainer>

        )

}