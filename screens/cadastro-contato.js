import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';


function CadastroContato({navigation}) {

    const [nome, setNome] = useState();
    const [email, setEmail]  = useState();
    const [fone, setFone] = useState();

    function createPost() {
        axios
          .post("http://localhost:3000/contatos", {
            nome: nome,
            avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
            email: email,
            telefone: fone 
          })
          .then((response) => {
            alert("Contato adicionado com sucesso!");
          });
      }

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center',marginTop: 10, maxWidth:'auto', padding: 10, gap: 10}}>
           <Header containerStyle={{width: '100%'}}
                placement="center"
                leftComponent={{ icon: 'arrow-left', color: '#fff', onPress:()=>navigation.navigate("Contatos")}}
                centerComponent={{ text: 'CONTATO', style: { color: '#fff' , paddingTop:7} }}
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
                    placeholder="E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Telefone"
                    leftIcon={{ type: 'font-awesome', name: 'phone', color: '#d3d3d3'}}
                    value={fone}
                    onChangeText={text => setFone(text)}
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

export default CadastroContato;