import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';


function Login({navigation}) {
    return (
        <View style={{flex: 1, flexDirection: "column", backgroundColor: "#FAF9F6"}}>
          <View style={{alignItems:'center'}}>
            <Avatar              
              rounded
              size ='xlarge'
              icon={{name: 'user', type: 'font-awesome'}}
            />
             <Input
                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                placeholder="Nome"
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#d3d3d3'}}
                onChangeText={value => this.setState({ comment: value })}
              />
             <Input
                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                onChangeText={value => this.setState({ comment: value })}
              />
          </View>
          <View style={{flex:1, alignItems: 'center', gap: 10}}>
            <Button
              containerStyle={{width: 200}}
              title="Login"
              onPress={()=>navigation.navigate("Contatos")}                        
            />
            <Button
              containerStyle={{width: 200, }}
              title="Cadastre-se"
              type='outline'
              onPress={()=>navigation.navigate("Contatos")}          
            />
          </View>
      </View>
    );
    }

export default Login;