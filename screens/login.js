import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Avatar, Button, Icon, Input } from 'react-native-elements';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";  



const firebaseConfig = {

  apiKey: "AIzaSyCC0ba7WNSW6e39WIWraJxxXjkhpmyVOpw",

  authDomain: "aula-app-b107c.firebaseapp.com",

  projectId: "aula-app-b107c",

  storageBucket: "aula-app-b107c.appspot.com",

  messagingSenderId: "571815928665",

  appId: "1:571815928665:web:1729bc2b79d50b4c95a248",

  measurementId: "G-Z622TG7HHY"

};

const provider = new GoogleAuthProvider()

function Login({navigation}) {

  const [email, setEmail]  = useState();
  const [senha, setSenha]  = useState();

  // function checkLogin() {
  //     axios
  //       .get(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`, {   
  //       })
  //       .then((response) => {
  //         if(response.data.length != 0){
  //           navigation.navigate("Contatos")            
  //         }else{
  //           showMessage({
  //             message: "E-mail e/ou senha incorretos!",
  //             type: "danger",
  //           })
  //         }
  //       }).catch(function(error){console.log(error)}), [email, senha];
  //   }
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function checkLogin(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigation.navigate("Contatos")
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  function loginWithGoogle(){
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

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
              containerStyle={{width: 200}}
              type='outline'
              icon={
                <Icon
                  type='font-awesome'
                  name="google"
                  color="blue"
                  
                  size={15}
                />
              }
              leftIcon
              title="oogle"
              buttonStyle={{borderRadius: 10}}
              onPress={loginWithGoogle}                      
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