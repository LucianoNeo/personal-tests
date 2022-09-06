import { useNavigation } from '@react-navigation/native';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styles';




export default function Home() {
    const navigate = useNavigation().navigate
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem-vindo ao findDevs</Text>
            <TouchableOpacity>
                <Text 
                onPress={()=> navigate('SignIn')}
                style={styles.texts}>
                    Voltar para a tela de login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
