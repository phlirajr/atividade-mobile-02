import axios from 'axios';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';



function EditarContato({route, navigation}) {   

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [fone, setFone] = useState();

    useEffect(()=>{
        if (route.params){
            const { nome } = route.params
            const { email } = route.params
            const { fone } = route.params
            setNome(nome)
            setEmail(email)
            setFone(fone)
        }
    }, [])
    
    function updatePost() {
        axios
          .put(`http://localhost:3000/contatos/${route.params.id}`, {
           id: route.params.id,
           nome:nome,
           avatar_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
           email:email,
           telefone: fone
          })
          .then(() => {
            console.log("cadastro alterado")
          }).catch(function(error){console.log(error)}), [];
      }

    function deletePost() {
        axios
          .delete(`http://localhost:3000/contatos/${route.params.id}`)
          .then(() => {
            alert("Contato excluído");
          });
      }

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center',marginTop: 10, maxWidth:'auto', padding: 10, gap: 10}}>
           <Header containerStyle={{width: '100%'}}
                placement="center"
                leftComponent={{ icon: 'arrow-left', color: '#fff', onPress:()=>navigation.navigate("Contatos")}}
                centerComponent={{ text: 'EDITAR', style: { color: '#fff' , paddingTop:7} }}
            />
            <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
                <Input 
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder= "Nome"
                    value = {nome}
                    leftIcon={{ type: 'font-awesome', name: 'user', color: '#d3d3d3'}}
                    onChangeText={nome => setNome(nome)}
                    style = {{marginTop: 10, padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="E-mail"
                    value = {email}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                    onChangeText={email => setEmail(email)}
                    style={{padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Fone"
                    value= {fone}
                    leftIcon={{ type: 'font-awesome', name: 'phone', color: '#d3d3d3'}}
                    onChangeText={fone => setFone(fone)}
                    style={{padding: 2}}
                />
                <View style={{alignItems:'center', paddingTop:30, gap: 20}}>
                    <Button
                        containerStyle={{width: 200}}
                        title="Alterar"
                        buttonStyle={{borderRadius: 10}}
                        onPress={updatePost}                                        
                    />
                    <Button
                        containerStyle={{width: 200}}
                        title="Excluir"
                        buttonStyle={{backgroundColor: "orange", borderRadius: 10}}  
                        onPress={deletePost}                                      
                    />
                </View>
            </View>             
      </View>
    );
    }

export default EditarContato;