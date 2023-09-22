import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import FlashMessage, { showMessage } from 'react-native-flash-message';


function Login({navigation}) {

  const [email, setEmail]  = useState();
  const [senha, setSenha]  = useState();

  function checkLogin() {
      axios
        .get(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`, {   
        })
        .then((response) => {
          if(response.data.length != 0){
            navigation.navigate("Contatos")            
          }else{
            showMessage({
              message: "E-mail e/ou senha incorretos!",
              type: "danger",
            })
          }
        }).catch(function(error){console.log(error)}), [email, senha];
    }


    return (
        <View style={{flex: 1, flexDirection: "column", justifyContent:'center', alignItems: 'center', paddingTop: 200}}>
          <FlashMessage position="top"/>
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
                placeholder="E-mail"
                leftIcon={{ type: 'font-awesome', name: 'at', color: '#d3d3d3'}}
                value = {email}
                onChangeText={email => setEmail(email)}
                style = {{marginTop: 10, padding: 2}}
              />
             <Input
                containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                value = {senha}
                onChangeText={senha => setSenha(senha)}
                style={{padding: 2}}
              />
          </View>
          <View style={{flex:1, alignItems: 'center', gap: 20, paddingTop:20}}>
            <Button
              containerStyle={{width: 200}}
              title="Login"
              buttonStyle={{borderRadius: 10}}
              onPress={checkLogin}                      
            />
            <Button
              containerStyle={{width: 200 }}
              title="Cadastre-se"
              buttonStyle={{backgroundColor: "orange", borderRadius: 10}}              
              onPress={()=>navigation.navigate("CadastroUser")}          
            />
          </View>
      </View>
    );
    }

export default Login;