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
    }, [ ])

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
                    onChangeText={email => setNome(email)}
                    style={{padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Fone"
                    value= {fone}
                    leftIcon={{ type: 'font-awesome', name: 'phone', color: '#d3d3d3'}}
                    onChangeText={fone => setNome(fone)}
                    style={{padding: 2}}
                />
                <View style={{alignItems:'center', paddingTop:30, gap: 20}}>
                    <Button
                        containerStyle={{width: 200}}
                        title="Alterar"
                        buttonStyle={{borderRadius: 10}}                                        
                    />
                    <Button
                        containerStyle={{width: 200}}
                        title="Excluir"
                        buttonStyle={{backgroundColor: "orange", borderRadius: 10}}                                        
                    />
                </View>
            </View>             
      </View>
    );
    }

export default EditarContato;