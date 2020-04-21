import React, { Component, Fragment } from "react";
import axios from "axios";

class Social extends Component {

state = {
        Videos1 : [],
    }
    componentDidMount() {
        axios.get('js/data.json').then( res => {this.setState({Videos1 : res.data.Videos1})})
    }

    render(){

        const {Videos1} = this.state;
        const Videos1List = Videos1.map( (Videos1Item) => {

            return(
                <Fragment>
                <div className="Videos" key={Videos1Item.id}>
                    <div className="container">
                    <div className="row">
                        <div className="side">

                            <div className="fakeimg">
                                <img src={Videos1Item.img} className="imgg" /> 
                            </div>
                           
                        </div>    
                        <div className="main">
                            <h2>{Videos1Item.name}</h2>
                            <h5>{Videos1Item.JobName}</h5>
                            <p>{Videos1Item.profile}</p>
                            <button type="button" className="bbbbtt btn btn-secondary" data-toggle="modal" data-target="#exampleModalScrollable1">
                                See More Details
                                </button>

                                <div className="modal fade" id="exampleModalScrollable1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalScrollableTitle1">What you can know about Ahmed Alaa</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                       Name : {Videos1Item.name} . 
                                       <br />
                                       Job Title : {Videos1Item.JobName} . 
                                       <br />
                                       He is {Videos1Item.age} old .
                                       <br />
                                       Birthday date : {Videos1Item.data} .
                                       <br />
                                       The present Company Work in {Videos1Item.companynow} .
                                       <br />
                                       The Level Now {Videos1Item.level} . and The Salary of take is {Videos1Item.salray} . 
                                       <br />
                                       Gratuided from faculty of {Videos1Item.faculty} .
                                       <br />
                                       He studied these languages {Videos1Item.qualification}
 
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
                {Videos1List}
            </div>
        );
    }
}
export default Social;
