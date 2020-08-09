import React from 'react';
import styles from './styles';
import { View,Image,Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem() {
    return (
            <>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <Image 
                            style={styles.avatar}
                            source={{uri:'https://avatars3.githubusercontent.com/u/13178261?s=460&u=a4096072f66f48c990bda1c373b96257370cf52e&v=4'}}
                         />
                         <View style={styles.profileInfo}>
                         <Text style={styles.name}>Filipe Cancio</Text>
                         </View>
                    </View>

                    <Text style={styles.bio}>
                    Técnico em Eletromecânica e Estudante de Sistemas de Informação no IFBA Vitória da Conquista, desenvolvedor web e ilustrador.
                    </Text>
                    <View style={styles.footer}>
                    <Text style={styles.price}>
                        Preço/Hora {''}
                        <Text style={styles.priceValue} >R$20,00</Text>
                    </Text>
                    
                    <View style={styles.buttonContainer}>
                        <RectButton style={[styles.favoriteButton, styles.favorited]}>
                            {/*<Image source={heartOutlineIcon}/>*/}
                            <Image source={unfavoriteIcon}/>
                        </RectButton>
                        <RectButton style={styles.contactButton}>
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText}>Contato</Text>
                        </RectButton>
                        </View>
                        </View>
                </View>
            </>
    );
}

export default TeacherItem;