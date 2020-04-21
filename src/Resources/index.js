import React, { Component, Fragment } from "react";
import axios from "axios";
import "./resource.css";

class Resources extends Component {
    state = {
        Resource : [] 
    }
    componentDidMount() {
        axios.get('js/data.json').then( res => { this.setState({ Resource: res.data.Resource}) } )
    }
    render(){    
    const {Resource} = this.state;
    const ResourceList = Resource.map( (ResourceItem ) => {

    return(
    <Fragment>
            <div className="card-deck-cd col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card-cd">
                 <img src={ResourceItem.img} className="card-img1" alt="..." key={ResourceItem.id} />
                <div className="card-body-cd">
                <h5 className="card-title-cd">{ResourceItem.title}</h5>
                <a href={ResourceItem.videos} className="card-link" target="_blank" >{ResourceItem.Name}</a>
                <br />
                <a href={ResourceItem.videos2} className="card-link" target="_blank" >{ResourceItem.Name2}</a>
                <br />
                <a href={ResourceItem.videos3} className="card-link" target="_blank" >{ResourceItem.Name3}</a>
                </div>
            </div>
            </div>


    </Fragment>

    )
})

    return(
        <div className="Resource">
          {ResourceList}

          <video className="vid" controls loop>
            <source src="/images/Screencast 2020-04-13 02:45:36.mp4" />
            </video>
            <p className="pTovid">Watch This Video <a href="https://youtu.be/0Sff5ffwKn8" target="_blank">How to become front end developer in arabic</a>
            </p>

          <div className="social-media">
            
            <div className="social face">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>

          <div className="footer">
                <p> copyright &copy; 2020 by Abdulrahman <span className="alaa">Alaa</span></p>
            </div>
        </div>        

        );
    }
}
export default Resources;