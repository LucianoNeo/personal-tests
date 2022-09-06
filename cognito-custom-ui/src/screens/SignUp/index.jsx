import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';


export default function SignUp() {

    const [name, setName] = useState('')
    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const onSignUpPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.signUp({
            username, 
            password,
            attributes:{email,name,preferred_username: username}
            })
            console.log(response)

        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça seu cadastro</Text>

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Nome:'
                onChangeText={value => setName(value)}
            />

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Usuário:'
                onChangeText={value => setUser(value)}
            />

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='E-mail:'
                onChangeText={value => setEmail(value)}
            />

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Senha:'
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <Button
                color='#2D9135'
                title={loading ? 'Carregando...' : 'Registrar'}
                onPress={() => onSignUpPress()}
                disabled={loading ? true : false}
                buttonStyle={styles.buttons}
            />
        </View>
    )
}
