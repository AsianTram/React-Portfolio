import React, { Component } from 'react';
import fire from '../../fire';

export default class LanguageItem extends Component {
    componentDidMount=()=>{
        var storage= fire.storage().ref();
        var id =this.props.language.key;  

        if(this.props.language.photo!==null){
            storage.child(`photos/${this.props.language.photo}`).getDownloadURL().then(function(url) {
                document.querySelector(`#language${id} .language-photo img`).src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
    }
    render() {
        return (
            <div className="language-item" id={`language${this.props.language.key}`}>
            <div className="language-photo">
                <img src="https://via.placeholder.com/400x300/FAD02C" alt="School icon"/>
            </div>
            <div className="language-info">
                <h4>{this.props.language.name}</h4>
                <p>{this.props.language.level}</p>
            </div>
        </div>
        )
    }
}
