import React, { Component, Fragment } from "react";
import "./Frontend.css";
import uuid from "uuid";

class Frontend extends Component{

    constructor(props) {
    super(props)
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }

    addTask=()=>{
    
    const Items={
            id:uuid.v4(),
            value:this.input.current.value,
            Date: new Date().toUTCString()
        };

        if(localStorage.getItem('list')==null){
            const list=[]
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
            list:JSON.parse(localStorage.getItem('list'))
        });
    }

    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if(list == null){
            return false
        }
        else{
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }
    
    deleteItem=(event)=> {       
        let index = event.target.getAttribute('data-key')
        let listValue=JSON.parse(localStorage.getItem('list'));
        listValue.splice(index,1)
        this.setState({list:listValue});
        localStorage.setItem('list',JSON.stringify(listValue))
    }
    
    render() {
        return (
            <div className="main-container">
                <h1>How much you benefited from this information on our website ?! </h1>
                <hr/>
                <div className="container">
                    <h4 className="help">Tell me what do you want for help you </h4>
                    <input type="text" placeholder="I can Help you..." id="Name" ref={this.input} ></input>
                    <button onClick={this.addTask} className="button  btn btn-info" >Comment </button>

                        {
                            this.state.list.map((item,index)=>
                        {
                            return(<li key={item.id}> {item.value}
                                <button className="butto btn btn-dark" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button></li>)

                            })
                        }                            
                </div>             
            </div>
        )
    }
}

export default Frontend;