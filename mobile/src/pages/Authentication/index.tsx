import React, { useState, useContext } from 'react';
import { View, Text, TextInput, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import AuthContext from '../../contexts/auth';

import styles from './styles';

function Authentication(this: any) {
    const { signed, user, signIn } = useContext(AuthContext);
    console.log(signed);
    console.log(user);

    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);

    function handleNavigateToCreateAccount() {
        navigation.navigate('CreateAccount');
    }

    function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Proffy</Text>
                <Text style={styles.title}>Sua plataforma de estudos online.</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Fazer login</Text>
                <Text
                    style={styles.newAccount}
                    onPress={handleNavigateToCreateAccount}
                >
                    Criar uma conta
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='#c1bccc'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    placeholderTextColor='#c1bccc'
                />

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />

                    {/* <View style={styles.checkboxTextContainer}> */}
                    <Text style={styles.checkboxText}>Lembrar-me</Text>

                    {/* </View> */}
                    <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>
                </View>


                <RectButton style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.textButton}>Entrar</Text>
                </RectButton>

            </View>
        </View >
    )
}

export default Authentication;
