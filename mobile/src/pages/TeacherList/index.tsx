import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
    const [isFilterVisible, setVisibleFilter] = useState(false);

    function handleToggleVisibleFilter() {
        setVisibleFilter(!isFilterVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title='Proffys disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleToggleVisibleFilter}>
                        <Feather name='filter' size={20} color='#FFF' />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matérias</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Qual a matéria?'
                        placeholderTextColor='#c1bcc'
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Qual o dia?'
                                placeholderTextColor='#c1bcc'
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Qual o horário?'
                                placeholderTextColor='#c1bcc'
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 8,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;
