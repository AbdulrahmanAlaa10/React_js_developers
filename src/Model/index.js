import React, { Component, Fragment } from "react";
import axios from "axios";

class Model extends Component {

state = {
        Videos2 : [],
    }
    componentDidMount() {
        axios.get('js/data.json').then( res => {this.setState({Videos2 : res.data.Videos2})})
    }

    render(){

        const {Videos2} = this.state;
        const Videos2List = Videos2.map( (Videos2Item) => {

    return(
        <Fragment>
        <div className="Videos" key={Videos2Item.id}>
                <div className="container">
                <div className="row">
                    <div className="side">
                        <div className="fakeimg">
                            <img src={Videos2Item.img} className="imgg" /> 
                        </div>
                           
                    </div>    
                    <div className="main">
                        <h2>{Videos2Item.name}</h2>
                        <h5>{Videos2Item.JobName}</h5>
                        <p>{Videos2Item.profile}</p>
                        <button type="button" className="bbbbtt btn btn-outline-info" data-toggle="modal" data-target="#exampleModalScrollable2">
                            See More Details
                        </button>

                        <div className="modal fade" id="exampleModalScrollable2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle2" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle2">What you can know about Medhat Dawwad</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                   Name : {Videos2Item.name} . 
                                   <br />
                                   Job Title : {Videos2Item.JobName} . 
                                   <br />
                                   He is {Videos2Item.age} old .
                                   <br />
                                   Birthday date : {Videos2Item.data} .
                                   <br />
                                   The present Company Work in {Videos2Item.companynow} .
                                   <br />
                                   The Level Now {Videos2Item.level} . and The Salary of take is {Videos2Item.salray} . 
                                   <br />
                                   Gratuided from faculty of {Videos2Item.faculty} .
                                   <br />
                                   He studied these languages {Videos2Item.qualification}
                                   </div>
                                   <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                   </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>   
        </div>
        </Fragment>

    )
})
        return(  
            <div className="Videos">
                {Videos2List}
            </div>
        );
    }
}
export default Model;