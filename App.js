/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
   super(props);
   this.state = {total: '', notas2: '', notas5: '', notas10: '', notas20: '', notas50: '', notas100: ''};
  }

  soma(){
    return this.state.notas2*2+this.state.notas5*5+this.state.notas10*10+this.state.notas20*20+this.state.notas50*50+this.state.notas100*100
  }

  zerar = () => {
    this.setState({
      total: '',
      notas2: '',
      notas5: '',
      notas10: '',
      notas20: '',
      notas50: '',
      notas100: ''
    });
  }



  render() {
    const total = this.soma();
    const nota2 = this.state.notas2*2;
    const nota5 = this.state.notas5*5;
    const nota10 = this.state.notas10*10;
    const nota20 = this.state.notas20*20;
    const nota50 = this.state.notas50*50;
    const nota100 = this.state.notas100*100;

    return (
      <View style={{flex:1}}>
        <View style = { styles.texto}>
          <Text style={{fontSize:20}}>Contador de Notas</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas}  source={require('./img/2R.jpg')}/>
          <TextInput
            value={this.state.notas2}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas2: text});}}
          />
          <Text style={styles.textoNotas}>R${nota2}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas} source={require('./img/5R.jpg')}/>
          <TextInput
            value={this.state.notas5}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas5: text});}}
          />
          <Text style={styles.textoNotas}>R${nota5}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas} source={require('./img/10R.jpg')}/>
          <TextInput
            value={this.state.notas10}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas10: text});}}
          />
          <Text style={styles.textoNotas}>R${nota10}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas} source={require('./img/20R.jpg')}/>
          <TextInput
            value={this.state.notas20}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas20: text});}}
          />
          <Text style={styles.textoNotas}>R${nota20}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas} source={require('./img/50R.jpg')}/>
          <TextInput
            value={this.state.notas50}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas50: text});}}
          />
          <Text style={styles.textoNotas}>R${nota50}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.notas} source={require('./img/100R.jpg')}/>
          <TextInput
            value={this.state.notas100}
            keyboardType={'numeric'}
            style={styles.textoInput}
            onChangeText={(text) => {this.setState({notas100: text});}}
          />
          <Text style={styles.textoNotas}>R${nota100}</Text>

        </View>
        <View style={styles.container}>
          <Text style={{fontSize:30, marginLeft:10,color:'red'}}>Total: R$ {total} </Text>
          <TouchableOpacity
            style={{width:100,  height: 35, marginLeft:20, alignItems: 'center', padding:5, backgroundColor: "#841584"}}
            onPress={this.zerar}
            accessibilityLabel="Zerar notas"
          >
            <Text style={{fontSize:20,color:'white'}}>Zerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  notas: {
    width: 100,
    height:50,
    marginLeft: 10
  },
  texto: {
    alignItems: 'center',
    marginLeft: 10
  },

  textoNotas: {
    fontSize: 30,
    marginLeft: 10,
    color: 'blue'

  },

  textoInput:{
    marginLeft: 20,
    height: 50,
    width:  50,
    borderWidth:1,
    fontSize: 25
  },
});
