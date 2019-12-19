import React, { Component } from 'react';
import fire from '../../fire';

export default class CertificateItem extends Component {
    componentDidMount=()=>{
        var storage= fire.storage().ref();
        var id =this.props.certificate.key;  

        if(this.props.certificate.photo!==null){
            storage.child(`photos/${this.props.certificate.photo}`).getDownloadURL().then(function(url) {
                document.querySelector(`#certificate${id} .certificate-photo img`).src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
    }
    render() {
        return (
            <div className="certificate-item" id={`certificate${this.props.certificate.key}`}>
            <div className="certificate-photo">
                <img src="https://via.placeholder.com/400x300/282120" alt="Certificate icon"/>
            </div>
            <div className="certificate-info">
                <h4>{this.props.certificate.name}</h4>
                <button><a href={this.props.certificate.repo}>Project Repo</a></button>
                <button><a href={this.props.certificate.link}>Website</a></button>            </div>
        </div>
        )
    }
}
