import logo from './logo.svg';
import './App.css';
import {Ashish} from './Ashish';
import { DisplayPage } from './DisplayPage';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {TvShowListMap} from './TvShowListMap';

function App() {
  const[popularShow,setPopularShow] = useState();
  const[recommendedShow,setRecommendedShow] = useState([]);

function callme(){
  alert("hi i am from App ");
}
async function getPopularShow(){
  try{
  const apiCall=await axios.get('http://api.themoviedb.org/3/movie/popular?api_key=84f8160e916be9b849a266f27809687e');
  setPopularShow(apiCall.data.results[9]);
  }
  catch(e){
    console.log("eerorrr occured");
  }
  console.log("hello "+recommendedShow);
 
}
async function getRecommenedShow(){
  try{
    console.log(popularShow);
  const apiCall=await axios.get(`http://api.themoviedb.org/3/movie/${popularShow.id}/recommendations?api_key=84f8160e916be9b849a266f27809687e`);
 console.log(apiCall.data.results.slice(0,10));
 setRecommendedShow(apiCall.data.results.slice(0,10));
  }
  catch(e){
    console.log("eerorrr occured");
  }
  console.log("hello "+recommendedShow);
 
}


useEffect ( ()=>{
  getPopularShow();
  console.log("i am useEffect of popular show");
},[]);
useEffect ( ()=>{
  if(popularShow){
  getRecommenedShow();
  console.log("i am recommened show");
  }
  
},[popularShow]);
function onclickItem(tvshow){
  setPopularShow(tvshow);
}

console.log("popularShow  "+popularShow);
console.log("later  "+recommendedShow.length);
  return (
    
    <div className='firstPage' style={{
      background: popularShow
        ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("https://image.tmdb.org/t/p/original${popularShow.backdrop_path}") no-repeat center / cover`
        : "black",
    }}>
    <div>
    {popularShow && <DisplayPage getPopularShowName={popularShow.title} getShowDesc={popularShow.overview}/>
}
    </div>
    
     {recommendedShow && recommendedShow.length>0 ? <TvShowListMap onclickmeparent={onclickItem} showList={recommendedShow} />:<span></span>
     }
     
    
    </div> 
  );
}

export default App;
