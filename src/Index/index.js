import React , { Component } from 'react';
import Social from "./../Social/index";
import Model from "./../Model/index";

class Index extends Component {
    render() {
        return (
            <div>
                <Social />
                <Model />
                <div className="footer">
                    <p> copyright &copy; 2020 by Abdulrahman <span className="alaa">Alaa</span></p>
                </div>
            </div>
        )
    }
}
export default Index;