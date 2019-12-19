import React, { Component } from 'react';
import fire from '../../fire';

export default class EducationItem extends Component {
    componentDidMount=()=>{
        var storage= fire.storage().ref();
        var id =this.props.education.key;  

        if(this.props.education.photo!==null){
            storage.child(`photos/${this.props.education.photo}`).getDownloadURL().then(function(url) {
                document.querySelector(`#education${id} .education-photo img`).src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
    }
    render() {
        return (
            <div className="education-item" id={`education${this.props.education.key}`}>
            <div className="education-photo">
                <img src="https://via.placeholder.com/400x300/FAD02C" alt="School icon"/>
            </div>
            <div className="education-info">
                <h4>{this.props.education.name}</h4>
                <p>{this.props.education.title}</p>
            </div>
        </div>
        )
    }
}
