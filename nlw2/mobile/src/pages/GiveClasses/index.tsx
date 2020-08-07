import React from 'react';
import {View, ImageBackground,Text} from 'react-native';
import styles from './styles';
import BgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={BgImage} 
                style={styles.content} 
            >
                <Text style={styles.title} >
                    Quer ser um Proffy?
                    </Text>
                <Text style={styles.description} >
                    Para Começar você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton 
                onPress={handleNavigateBack}
                style={styles.okbutton}
            >
                <Text style={styles.okbuttontext}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}
export default GiveClasses;