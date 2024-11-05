import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  function mostraCep(){
    alert('mostrou')
  }
  function limpaCep(){
    alert('limpou')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o cep</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 60000000"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        />
        </View>
        <View style={styles.areaBtn}>
          <TouchableOpacity style={[styles.botao, { backgroundColor: "#00BFFF" }]} onPress={mostraCep}>
            <Text style={styles.botaoText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao, { backgroundColor: "red" }]} onPress={limpaCep}>
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultado}>
          <Text style={styles.itemText}>teste</Text>
          <Text style={styles.itemText}>teste</Text>
          <Text style={styles.itemText}>teste</Text>
          <Text style={styles.itemText}>teste</Text>
          <Text style={styles.itemText}>teste</Text>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width:'90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems:'center',
    flexDirection: "row",
    marginTop: 15,
    marginBottom:-150,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:35,
    marginRight:35,
    
    borderRadius: 10,
  },
  botaoText: {
    fontSize: 22,
    color: "#fff",
    paddingLeft:10,
    paddingRight:15,
    
  },
  resultado:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  itemText:{
    fontSize:22,
  }
});
