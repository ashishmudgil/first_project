import { useEffect,useState } from 'react';
import axios from 'axios';

import { State } from './State';

import {DIFFICULTIES} from './Constant'

export function Ashish(props) {
    const [age1,setAge] = useState(28);
    const [myName,setMyName] = useState("hi ashish");

    

    function appending(x){
        return "Difficulty Set to: "+x;
    }
    function addAgeByOne(){
        setAge(age1+1);
        setMyName("hi ashish");
    }
    function decAgeByOne(){
        setAge(age1-1);
        setMyName("hi ashish");
    }
    function changeButtonName(){
        setMyName("hi sakshi");
     
    }
      
       
    return (
    <div>
        {/* <button onClick={addAgeByOne}>Increase Age</button>
        
        <button onClick={decAgeByOne}>Decrease Age</button> */}
        {/* {DIFFICULTIES.map((diff) => {
            return (<State difficultyLevel={diff}/>);
        })} */}
        {/* <State difficultyLevel="Low"/>
        <State difficultyLevel="Medium"/>
        <State difficultyLevel="High"/>
        <State difficultyLevel="Extreme"/> */}
        
        {/* <button onClick={changeButtonName}>{myName}</button>
        <p onClick={props.callmeFunc}>hey i am paragraph from Ashish</p> */}
     </div>);
}