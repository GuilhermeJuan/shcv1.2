import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Agenda from "../pages/TelaAgenda";
import Register from "../pages/TelaRegister";
import GerenciamentoMedicamentos from "../pages/TelaGM(Gerenciamento de Medicamentos)"
import AddMedication from "../pages/TelaAddRem"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Agenda"
                component={Agenda}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
            name="GerenciamentoMedicamentos"
            component={GerenciamentoMedicamentos}
            options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddMedication"
                component={AddMedication}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}