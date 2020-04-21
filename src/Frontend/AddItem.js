import React, { Component } from 'react'

class AddItem extends Component {
    state = {
        name : '', 
        rate : '', 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name : '',
            rate : ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter name ..." id="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="text" placeholder="Enter Rate ..." id="rate" onChange={this.handleChange} value={this.state.rate}/>
                <input type="submit" value="Add" />
                </form>
    
            </div>
        )
    }
}

export default AddItem;