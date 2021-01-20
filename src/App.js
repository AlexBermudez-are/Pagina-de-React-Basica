import './App.css';
import List from "./List.js";
import Menu from "./Menu.js";
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      books: [
        {id:0, rating: 4, title: "Arthas la Ascencion del Rey Exanime", image:'World_of_Warcraft-_-ARTHAS-LA-ASCENSION-DEL-REY-EXANIME-i6n2080088.jpg'},
        {id:1, rating:3, title:"Rise of The Order", image: 'World_of_Warcraft_-_RISE_OF_THE_HORDE.jpg'},
        {id:2, rating:4, title:"Day of The Dragon", image: 'World_of_Warcraft_-_DAY-OF-THE-DRAGON.jpg'},
        {id:3, rating:3, title: "Stormrage", image: 'World_of_Warcraft_-_STORMRAGE.jpg'},
        {id:4, rating:2, title:"Illidian", image:'World_of_Warcraft_-_ILLIDIAN.jpg'},
        {id:5, rating:4, title:"Crimes War", image:'World_of_Warcraft_-_Crimes_War.jpg'}
      ],
      copybooks: []
    };
  }
  componentDidMount(){
    this.initbooks()
  }
  initbooks=()=>{
    this.setState((state,props) => ({
      copybooks: [...state.books]
    }))
  }

  onAdd=(item)=>{
    let temp = [...this.state.books];
    const id = temp[temp.length-1].id +1;
    item['id'] = id;
    temp.push(item)

    this.setState({books: [...temp]})
    this.initbooks()
  }

  onsearch = (query) => {
    if(query ===  ""){
      this.initbooks()
    }else{
      const tempo = [...this.state.books]
      var rest = []

      tempo.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > 1){
          rest.push(item)
        }
      });
      this.setState({copybooks:[...rest]})
    }
  }

  updateRating = (item) => {
    const temp = [...this.state.books]
    let index = temp.findIndex(x => x.id === item.id)
    temp[index].title = item.title
    temp[index].image = item.image
    temp[index].rating = item.rating 
    this.setState({books: [...temp]})
    this.initbooks()
  }

  onRemove = (id) => {
    const temp = [...this.state.books]
    const rest = temp.filter(item => item.id !== id)
    
    this.setState({books: [...rest]})
    this.initbooks()
  }
  render(){
    return (
      <div className="App">
        <Menu title = "Comics" onadd={this.onAdd} onsearch={this.onsearch}/>
        <List lista = {this.state.copybooks} updateRating = {this.updateRating}
        onremove = {this.onRemove}/>
      </div>
    );
  }
}

export default App;
