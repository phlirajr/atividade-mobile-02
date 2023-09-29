import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar, Header, Button } from 'react-native-elements';
import FlashMessage from 'react-native-flash-message';
import { getAuth, signOut } from "firebase/auth";


function Contatos({navigation}) {

    const isFocused = useIsFocused();


    const [list, setList] = React.useState([]);
    React.useEffect(()=>{
      axios.get('http://localhost:3000/contatos').then(function(response){setList (response.data)}).catch(function(error){console.log(error)})
    }, [isFocused])

    // const list = [
    //     {
    //       nome: 'Paulo Henrique',
    //       avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU',
    //       telefone: '81 998929487'
    //     },
    //     {
    //       nome: 'Maria Joana',
    //       avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
    //       telefone: '81 999599452'
    //     },
    //     {
    //       nome: 'João Carlos',
    //       avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU',
    //       telefone: '81 99999999'
    //     },
    //     {
    //       nome: 'Pedro Augusto',
    //       avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU',
    //       telefone: '81 987654321'
    //     },
    //     {
    //       nome: 'Ana Júlia',
    //       avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
    //       telefone: '82 98767899'
    //     }
    //   ]
    function Logout(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        navigation.navigate("Home")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center',marginTop: 10, maxWidth:'auto', padding: 10, gap: 10}}>
           <Header containerStyle={{width: '100%'}}
                placement="center"
                leftComponent={{ icon: 'arrow-left', color: '#fff', onPress:()=>navigation.navigate("Home")}}
                centerComponent={{ text: 'LISTA DE CONTATOS', style: { color: '#fff' , paddingTop:5} }}
                rightComponent={{ icon: 'add', color: '#fff', onPress:()=>navigation.navigate("CadastroContato")}}
            />
            <View style={{alignItems:'center', paddingTop:30}}>
                <Button
                    containerStyle={{width: 200}}
                    title="Logout"
                    buttonStyle={{borderRadius: 10}}
                    onPress={Logout}                                           
                />
            </View>
                        
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={()=>navigation.navigate("Editar",
            {
              id: l.id,
              nome: l.nome,
              email: "",
              fone: l.telefone
            })} style={{width:'100%'}}>
                <Avatar source={{uri: l.avatar_url}} rounded />
                <ListItem.Content >
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
        </View>
    )
}
export default Contatos