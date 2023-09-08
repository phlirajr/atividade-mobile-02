import * as React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';


function Contatos({navigation}) {

    const list = [
        {
          name: 'Paulo Henrique',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU',
          subtitle: '81 998929487'
        },
        {
          name: 'Maria Joana',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
          subtitle: '81 999599452'
        },
        {
          name: 'João Carlos',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
          subtitle: '81 99999999'
        },
        {
          name: 'Pedro Augusto',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
          subtitle: '81 987654321'
        },
        {
          name: 'Ana Júlia',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaeepVoKMwwUUV0fSr7nyXeIZX9GFDkWq7A&usqp=CAU',
          subtitle: '82 98767899'
        }
      ]

    return (
        <View style={{flex: 1, flexDirection: "column", alignItems: 'center',marginTop: 10, maxWidth:'auto', padding: 10, gap: 10}}>
           <Header containerStyle={{width: '100%'}}
                placement="center"
                leftComponent={{ icon: 'arrow-left', color: '#fff', onPress:()=>navigation.navigate("Home")}}
                centerComponent={{ text: 'LISTA DE CONTATOS', style: { color: '#fff' , paddingTop:5} }}
                rightComponent={{ icon: 'add', color: '#fff', onPress:()=>navigation.navigate("CadastroContato")}}
            />            
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={()=>navigation.navigate("Editar",
            {
              nome: l.name,
              email: "",
              fone: l.subtitle
            })} style={{width:'100%'}}>
                <Avatar source={{uri: l.avatar_url}} rounded />
                <ListItem.Content >
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            ))
        }
        </View>
    )
}
export default Contatos