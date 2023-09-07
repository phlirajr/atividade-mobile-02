import * as React from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';


function CadastroUser({navigation}) {

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
                    onChangeText={value => this.setState({ comment: value })}
                    style = {{marginTop: 10, padding: 2}}
                />
                <Input 
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="CPF"
                    leftIcon={{ type: 'font-awesome', name: 'id-card', color: '#d3d3d3'}}
                    onChangeText={value => this.setState({ comment: value })}
                    style = {{marginTop: 10, padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="E-mail"
                    leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#d3d3d3'}}
                    onChangeText={value => this.setState({ comment: value })}
                    style={{padding: 2}}
                />
                <Input
                    containerStyle={{alignItems: 'center', justifyContent: 'center'}}
                    placeholder="Senha"
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#d3d3d3'}}
                    onChangeText={value => this.setState({ comment: value })}
                    style={{padding: 2}}
                />
                <View style={{alignItems:'center', paddingTop:30}}>
                    <Button
                        containerStyle={{width: 200}}
                        title="Salvar"
                        buttonStyle={{borderRadius: 10}}
                        onPress={()=>navigation.navigate("Contatos")}                                           
                    />
                </View>
            </View>             
      </View>
    );
    }

export default CadastroUser;