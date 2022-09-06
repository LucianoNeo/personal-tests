import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import {Auth} from 'aws-amplify'
import { useState } from 'react';


export default function SignIn() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const onSignInPress = async () =>{
        if(loading){
            return
        }

        setLoading(true)

        try {
            const response =  await Auth.signIn(user, password)
            Alert.alert('Bem vindo', 'ao FindDevs.')
            
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse sua conta</Text>
            
            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Login'
                onChangeText={value=> setUser(value)}
            />

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Senha'
                onChangeText={value=> setPassword(value)}
                secureTextEntry={true}
            />
            <Button
                color='#2D9135'
                title={loading ? 'Carregando...':'Entrar'}
                onPress={() => onSignInPress()}
                disabled={loading ? true : false}
                buttonStyle = {styles.buttons}
            />
            <Text style={styles.texts}>Acesse também com:</Text>
            <View style={styles.socialContainer}>

                <Button
                    color='#2D9135'
                    title='Google'
                    onPress={() => { }}
                    
                />

                <Button
                style={styles.buttons}
                    color='#2D9135'
                    title='Apple'
                    onPress={()=> onSignInPress()}
                />
                 
            </View>
            <TouchableOpacity>
            <Text style={styles.links}>Cadastre-se:</Text>
            </TouchableOpacity>
            
        </View>
    )
}
