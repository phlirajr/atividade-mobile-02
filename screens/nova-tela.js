// Import the functions you need from the SDKs you need
import * as ImagePicker from "expo-image-picker";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage, list, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { View } from "react-native";
import { Button, Header, Image } from "react-native-elements";
import { ActivityIndicator } from "react-native-web";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function NovaTela(navigation){   

    const [imageUri, setImageUri] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [lista, setLista] = useState([]);

    const firebaseConfig = {
        apiKey: "AIzaSyCC0ba7WNSW6e39WIWraJxxXjkhpmyVOpw",
        authDomain: "aula-app-b107c.firebaseapp.com",
        projectId: "aula-app-b107c",
        storageBucket: "aula-app-b107c.appspot.com",
        messagingSenderId: "571815928665",
        appId: "1:571815928665:web:1729bc2b79d50b4c95a248",
        measurementId: "G-Z622TG7HHY"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const pickImage = async () => {

        const result = await ImagePicker.launchImageLibraryAsync({
        
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        
        });
        
        if (!result.cancelled) {
        
            setImageUri(result.uri);
            console.log(result.assets);        
        }
        };

        const uploadImage = async () => {
            if (!imageUri) {
            Alert.alert('Selecione uma imagem antes de enviar.');
            return;
            }    
            const date = new Date();
            // Create a root reference
            const storage = getStorage();
            // Create a reference to 'mountains.jpg'
            const mountainsRef = ref(storage, `imagem${date.toISOString()}.jpg`);
            
            const response = await fetch(imageUri);
            const blob = await response.blob();
            
            uploadBytes(mountainsRef, blob).then((snapshot) => {
            console.log(snapshot);
            });
        }

        async function LinkImage() {
            // Create a reference under which you want to list

            const storage = getStorage();
            const listRef = ref(storage);
            // Fetch the first page of 100.
            const firstPage = await list(listRef, { maxResults: 100 });
            let images = firstPage.items.map((item) =>{

                return {link: 'https://firebasestorage.googleapis.com/v0/b/' +
                item.bucket + '/o/' + item.fullPath + '?alt=media'}
            })
            setLista(images)

        }


    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', justifyContent: 'space-evenly' }}>
        <Header
            containerStyle={{alignItems: 'center'}}
            leftComponent={{ icon: 'home', color: '#fff', onPress:()=>navigation.navigate("Home") }}
        />
        <Button title="Escolher Imagem" onPress={pickImage} />
        {imageUri && <Image source={{ uri: imageUri }} style={{
        
        width: 200, height: 200, marginVertical: 20 }} />}
        {uploading ? (
        <ActivityIndicator size="large" color="#0000ff" />
        ) : (
        
        <Button title="Enviar Imagem" onPress={uploadImage}
        
        disabled={!imageUri} />
        )}

        <Button title="Ver Imagens" onPress={LinkImage} />
        {lista?lista.map((image, i)=>(
            <Image
            key={i}
            source={{ uri: image.link }}
            style={{ width: 150, height: 100 }}
            PlaceholderContent={<ActivityIndicator />}
            />
        )):false}
        </View>
    )
}

export default NovaTela;