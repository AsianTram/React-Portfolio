import React, { Component } from 'react';
import fire from '../../fire';

export default class WorkItem extends Component {
    componentDidMount=()=>{
        var storage= fire.storage().ref();
        var id =this.props.work.key;  

        if(this.props.work.photo!==null){
            storage.child(`photos/${this.props.work.photo}`).getDownloadURL().then(function(url) {
                document.querySelector(`#work${id} .work-photo img`).src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
    }
    render() {
        return (
            <div className="work-item" id={`work${this.props.work.key}`}>
            <div className="work-photo">
                <img src="https://via.placeholder.com/400x300/FAD02C" alt="Company icon"/>
            </div>
            <div className="work-info">
                <h4>{this.props.work.name}</h4>
                <p>{this.props.work.desc}</p>
            </div>
        </div>
        )
    }
}
