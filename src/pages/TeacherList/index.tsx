import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../components';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function TeacherList(){

   

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }


    return (
        <View style={styles.container}>
            <PageHeader 
            title="Proffys disponíveis" 
            headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}>

               {isFiltersVisible && ( 
            <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput style={styles.input} 
                placeholder="Qual a matéria?" 
                placeholderTextColor="#c1bccc" />
            
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                <TextInput style={styles.input}
                placeholder="Qual o dia?" 
                placeholderTextColor="#c1bccc"/>
            
                    </View>

                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                <TextInput style={styles.input}
                placeholder="Qual o horário?" 
                placeholderTextColor="#c1bccc"/>
            
                    </View>

                </View>

                <RectButton onPress={handleToggleFiltersVisible} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
                </View>
               )}
            </PageHeader>

            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
            >
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />


            </ScrollView>

        </View>
    );
}


export default TeacherList;