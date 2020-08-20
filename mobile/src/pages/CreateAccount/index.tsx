import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function CreateAccount() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta gratuíta</Text>
            <Text style={styles.text}>Basta preencher esses dados e você estará conosco.</Text>

            <View style={styles.body}>
                <Text style={styles.text}>01. Quem é você?</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    placeholderTextColor='#c1bccc'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Sobrenome'
                    placeholderTextColor='#c1bccc'
                />

                <RectButton
                    // onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Text style={styles.submitButton}>Próximo</Text>
                </RectButton>
            </View>

        </View>

    );
}

export default CreateAccount;
