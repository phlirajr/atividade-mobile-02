import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';


function CadastroUser({navigation}) {

    const [nome, setNome] = useState();
    const [cpf, setCpf]  = useState();
    const [email, setEmail]  = useState();
    const [senha, setSenha] = useState();

    function createPost() {
        axios
          .post("http://localhost:3000/usuarios", {
            nome: nome,
            cpf: cpf,
            email: email,
            senha: senha 
          })
          .then((response) => {
            alert("Usuário adicionado com sucesso!");
            navigation.navigate("Contatos")
          });
      }

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center',marginTop: 10, maxWidth:'auto', padding: 10, gap: 10}}>
           <Header containerStyle={{width: '100%'}}
                placement="center"
                leftComponent={{ icon: 'arrow-left', color: '#fff', onPress:()=>navigation.navigate("Home")}}
                centerComponent={{ text: 'USUÁRIO', style: { color: '#fff' , paddingTop:7} }}
            />
            <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
                <Input 
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Nome"
                    leftIcon={{ type: 'font-awesome', name: 'user', color: '#d3d3d3'}}
                    value={nome}
                    onChangeText={text => setNome(text)}
                    style = {{marginTop: 10, padding: 2}}
                />
                <Input 
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="CPF"
                    leftIcon={{ type: 'font-awesome', name: 'id-card', color: '#d3d3d3'}}
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                    style = {{marginTop: 10, padding: 2}}
                    
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#d3d3d3'}}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Senha"
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    style={{padding: 2}}
                />
                <View style={{alignItems:'center', paddingTop:30}}>
                    <Button
                        containerStyle={{width: 200}}
                        title="Salvar"
                        buttonStyle={{borderRadius: 10}}
                        onPress={createPost}                                           
                    />
                </View>
            </View>             
      </View>
    );
    }

export default CadastroUser;