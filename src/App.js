import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from "react-native";

const colorGithub = "black";
const colorFontGithub = "grey";
const colorForButton = "white";
const imageProfileGithub = "https://avatars.githubusercontent.com/u/96144488?v=4";

const urlToMyGithub = "https://github.com/GustavoAguiar88";

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log("Verificando link");
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log("Link aprovado");
            console.log("Abrindo link....");
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor = {colorGithub} barStyle = "light-content" />
            <View style = {style.content}>
                <Image
                accessibilityLabel = "Gustavo no restaurante" 
                style = {style.avatar} 
                source = {{uri: imageProfileGithub}} />
            <Text 
                accessibilityLabel = "Nome: gustavo aguiar"
                style = {[style.defaultText, style.name]}>
                Gustavo Aguiar
            </Text>
            <Text 
                accessibilityLabel = "Nickname: gustavo aguiar88"
                style = {[style.defaultText, style.nickname]}>
                GustavoAguiar88
            </Text>
            <Text 
                accessibilityLabel = "Descrição: Dev. Student | Front-End |HTML | CSS | JavaScript | NodeJs"
                style = {[style.defaultText, style.description]}>
                Dev. Student | Front-End |HTML | CSS | JavaScript | NodeJs
            </Text>
            <Pressable onPress = {handlePressGoToGithub}>
                <View style = {style.button}>
                <Text style = {[style.defaultText, style.textButton]}>Open In Github</Text>
                </View>
            </Pressable>
            </View>
        </SafeAreaView>
        );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Columm
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        alignItems: "center",
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 27,

    },
    nickname: {
        fontSize: 20,
    },
    description: {
        fontWeight: "bold",
        fontSize: 17,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorForButton,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 18,
    }
    
});