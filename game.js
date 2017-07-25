/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import styles from './style.js'

var Animal =   React.createClass({
    render() {
        return(
            <TouchableHighlight style={styles.touch} onPress={this.props.onPress} >
                <Text style={styles.animal}>{this.props.show ? '🐼': ''} </Text>
            </TouchableHighlight>
        )
    }
})

var timeLimit = 15
var timer = null
const STORAGE_KEY = '@Game:data'

export default class Game extends Component {

    constructor(){
        super();
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false,]
        }
    }

    _startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0,
        });

        animals = setInterval( () => {

            var currentHoles = this.state.holes;
            currentHoles[Math.floor(Math.random() * 9)] = true;
            if(!Math.floor(Math.random()*2)) {
                currentHoles= [false, false, false, false, false, false, false, false, false,]
            }
            this.setState({
                holes: currentHoles,
            })

            if(!this.state.playing){
                clearInterval(animals);
                this.setState({ holes: [false, false, false, false, false, false, false, false, false] })
            }

        }, 300);

        timer = setInterval( () => {
            this.setState({
                timeCount: this.state.timeCount - 1,
            });

            if(this.state.timeCount == 0) {
                this._stopGame();
            }
        }, 1000);
    }

    _stopGame() {
        clearInterval(timer);
        alert('TIME IS UP!')
        if(this.state.score > this.state.highScore){
            alert("Congrats! you got the high score")
        }
        this.setState({
            playing: false,
            highScore: (this.state.score > this.state.highScore) ? this.state.score :
            this.state.highScore,
        })
        
        this._save()
    }

    _handleTouch(holeNumber) {
        if(this.state.holes[holeNumber]){
            this.setState({
                score: this.state.score + 1,
            })

            this.state.holes[holeNumber] = false

        }
    }

    _save() {
      AsyncStorage.setItem(STORAGE_KEY, this.state.highScore + '')
      .then(()=> console.log(this.state.highScore + 'data has been saved'))
      .catch((error) => console.log('AsyncStorage: ' + error.message))
      .done()
      
    }

    componentDidMount() {
      AsyncStorage.getItem(STORAGE_KEY)
      .then((score) => {
        this.setState({
          highScore: score,
        })
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scoreRow}>
            <View style={styles.highScore} >
                <Text style={styles.textScore} > High score</Text>
                <Text style={styles.textScore}> {this.state.highScore} </Text>
            </View>
            <View style={styles.timeCount}>
                <Text style={styles.textTime}> Time </Text>
                <Text style={[styles.textTime, {fontSize: 30}]}> {this.state.timeCount} </Text>
            </View>
            <View style={styles.currentScore} >
                <Text style={styles.textScore}> Score </Text>
                <Text style={styles.textScore}> {this.state.score} </Text>
            </View>
        </View>
        <View style={styles.holesRow}>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[0]}
                onPress={()=> this._handleTouch(0)} />
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[1]}
                onPress={()=> this._handleTouch(1)}/>
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[2]}
                onPress={()=> this._handleTouch(2)}/>
            </View>
        </View>
        <View style={styles.holesRow}>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[3]}
                onPress={()=> this._handleTouch(3)}/>
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[4]}
                onPress={()=> this._handleTouch(4)}/>
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[5]}
                onPress={()=> this._handleTouch(5)}/>
            </View>
        </View>
        <View style={styles.holesRow}>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[6]}
                onPress={()=> this._handleTouch(6)}/>
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[7]}
                onPress={()=> this._handleTouch(7)}/>
            </View>
            <View style={styles.hole} > 
                <Animal show={this.state.holes[8]}
                onPress={()=> this._handleTouch(8)}/>
            </View>
        </View>
        <View style={styles.buttonRow} >
             <TouchableHighlight style={styles.buttonStyle}
             onPress={this._startGame.bind(this)} 
             disabled={this.state.playing} >
                 <Text style={styles.buttonText} > START GAME </Text>
             </TouchableHighlight>
        </View>
        
      </View>
    );
  }
}



AppRegistry.registerComponent('Game', () => Game);