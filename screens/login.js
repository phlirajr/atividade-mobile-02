import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';


function Login({navigation}) {
    return (
        <View style={{flex: 1, flexDirection: "column", justifyContent:'center', alignItems: 'center', paddingTop: 200}}>
          <View style={{alignItems: 'center'}}>
          <Avatar
            rounded
            size = "xlarge"
            source={{
              uri:
                'https://image.pngaaa.com/567/2189567-middle.png',
            }}
          />
             <Input
                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                placeholder="Nome"
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#d3d3d3'}}
                onChangeText={value => this.setState({ comment: value })}
                style = {{marginTop: 10, padding: 2}}
              />
             <Input
                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                onChangeText={value => this.setState({ comment: value })}
                style={{padding: 2}}
              />
          </View>
          <View style={{flex:1, alignItems: 'center', gap: 20, paddingTop:20}}>
            <Button
              containerStyle={{width: 200}}
              title="Login"
              onPress={()=>navigation.navigate("Contatos")}                        
            />
            <Button
              containerStyle={{width: 200 }}
              title="Cadastre-se"
              type='outline'
              onPress={()=>navigation.navigate("Contatos")}          
            />
          </View>
      </View>
    );
    }

export default Login;