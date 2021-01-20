import React from 'react'
import './Item.css';

class Item extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        title: '',
        image: '',
        rating: 1,
        star:[]
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image:this.props.image,
            rating:parseInt(this.props.rating),
            star: Array(parseInt(this.props.rating)).fill(0)
        })
    }
    onChangeRating = e => {
        this.setState({
            rating: parseInt(e.target.value),
            star: Array(parseInt(e.target.value)).fill(0)
        })
        this.props.updaterating({id: this.state.id, title: this.state.title ,image: this.state.image, rating: this.state.rating})
    }
    onRemove = (e) => {
        this.props.onremove(this.props.id)
    }
    render(){
    return (
        <div className = "item">
            <div className = "image"><img src={'imagenes/'+this.state.image} alt={this.state.img} width="100%"/></div>
            <div className = "title">{this.state.title}</div>
            <div className = "Rating">
                <p className="Stars">
                {
                    this.state.star.map(x=>
                        <img className="Star" src = 'imagenes/star.png' alt={this.state.img} width="32" />
                    )
                }
                </p>
                Calificacion: 
                <select className="Rate" value={this.state.rating} onChange={this.onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className = "actions">
                <button onClick = {this.onRemove}>eliminar</button>
            </div>
        </div>
    )}
}
export default Item 