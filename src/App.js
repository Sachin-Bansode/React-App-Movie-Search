import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor()
  {
        super();
        this.state={
          data: [],
        }
  }
  componentDidMount(){


  }
  save(){

    var val = this.refs.newtext.value;
    console.log('title you have typed'+val);
    fetch(`http://api.themoviedb.org/3/search/movie?api_key=cc4b67c52acb514bdf4931f7cedfd12b&query=${val}`).
    then((Response)=> Response.json()).
    then((findresponse)=>{

      console.log(findresponse.results);
      console.log(findresponse.results.poster_path);
      
      this.setState({
        data: findresponse.results
      })
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Search For Movies</h1>
        </header>
        <p className="App-intro">
          Enter the Title of the  <code>Movie</code>  and hit Search

        </p>
        <input type="text" ref="newtext"/>
         <button onClick={this.save.bind(this)}>Search</button>

        <div className="padder" >
        <table className="centerer">
        <thead className="centerer">
                <tr className="padder">
                     <th className="spacer"> Title </th>
                     <th className="spacer"> Release Date(YYYY-MM-DD) </th>
                     <th className="spacer"> OverView </th>
                     <th className="spacer"> Rating </th>
                     <th className="spacer"> Poster </th>
                </tr>
         </thead>       
        {
          this.state.data.map((ddata,key) =>
                    
                <tbody className="padder">
                <tr className="padder">
                      <td className="bolder"><span>{ddata.title}</span> </td>
                      <td className="padder"><span className="spacer">{ddata.release_date}</span>  </td>
                      <td  valign="middle" className="wid padder hei">{ddata.overview}</td>
                      <td className="padder"><span>{ddata.vote_average}</span> </td>
                      <td className="padder"><img src={`https://image.tmdb.org/t/p/w500${ddata.poster_path}`} alt="No Poster Available" height="300" width="250"/> </td>
                </tr>
               </tbody>
                
               
               
         
          )
            }
           </table>
        
       </div>
      </div>
    );
  }
}

export default App;
