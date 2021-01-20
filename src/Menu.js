import React from "react";
import Search from "./Search"
import './Menu.css'
import PanelAdd from "./PanelAdd";
class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {newItemPanel: false}
    }
    add = () => {
        this.setState({newItemPanel: true})
    }
    oncancel = (e) =>{
        this.setState({newItemPanel: false})
    }
    render(){
        return (
            <div className="container">
                <img className="comic" src="/imagenes/comic.png"></img>
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="Search">
                        <Search onsearch={this.props.onsearch}/>
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">Añadir Nuevo Libro</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd oncancel={this.oncancel} onadd={this.props.onadd}/>
                    :
                    ''
                }
            </div>  
        )
    }
} 
export default Menu