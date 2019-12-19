import React, { Component } from 'react'
import CertificateItem from './CertificateItem';
import fire from '../../fire';


export default class Certificates extends Component {
    constructor(props){
        super(props)
        this.state={certificates:[]};

    }
    componentDidMount=()=>{
        var db= fire.database();
        var projectRef= db.ref().child('certificates');
        projectRef.on('value', this.gotData, this.errData);
    }
    gotData= (data)=>{
        var list = [];
            data.forEach (function (dat) {
              var item = {
                key: dat.key,
                ...dat.val()
              }
              list.push (item);
            });
        this.setState({certificates: list});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
    render() {
        return (
            <div className="certificates">
                <h1 className="title-name">Certificates</h1>
                {this.state.certificates.map(item=> <CertificateItem key={item.key} certificate={item}/>)}
            </div>
        )
    }
}
