import * as React from 'react';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contatos from './screens/contatos';
import CadastroContato from './screens/cadastro-contato';
import CadastroUser from './screens/cadastro-user';
import EditarContato from './screens/alterar-contato';

const Stack = createNativeStackNavigator();

function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Contatos" component={Contatos} options={{headerShown: false}} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} options={{headerShown: false}} />
        <Stack.Screen name="CadastroUser" component={CadastroUser} options={{headerShown: false}} />
        <Stack.Screen name="Editar" component={EditarContato} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;
