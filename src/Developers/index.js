import React, { Component, Fragment } from "react";
import "./style.css";
import axios from "axios";

class Developers extends Component {
    state = {
        Videos : [],
    }

    componentDidMount() {
        axios.get('js/data.json').then( res => {this.setState({Videos : res.data.Videos})})
    }

    render(){

        const {Videos} = this.state;
        const VideosList = Videos.map( (VideosItem) => {

    return(
        <Fragment>
        <div className="Videos" key={VideosItem.id}>
                <div className="container">
                <div className="row">
                <div className="side">
                    <div className="fakeimg">
                    <img src={VideosItem.img} className="imgg" /> 
                    </div>
                </div>    
                <div className="main">
                    <h2>{VideosItem.name}</h2>
                    <h5>{VideosItem.JobName}</h5>
                    <p>{VideosItem.profile}</p>
                    <button type="button" className="bbbt btn btn-info" data-toggle="modal" data-target="#exampleModalScrollable">
                        See More Details
                    </button>

                    <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">What you can know about Mohamed Sawwaf</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            Name : {VideosItem.name} . 
                            <br />
                            Job Title : {VideosItem.JobName} . 
                            <br />
                            He is {VideosItem.age} old .
                            <br />
                            Bithday data : {VideosItem.data} .
                            <br />
                            The present Company Work in {VideosItem.companynow} .
                            <br />
                            The Level Now {VideosItem.level} . and The Salary of take is {VideosItem.salray} . 
                            <br />
                            Gratuided from faculty of {VideosItem.faculty} .
                            <br />
                            He studied these languages {VideosItem.qualification} .
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
                {VideosList}
            </div>
        );
    }
}
export default Developers;