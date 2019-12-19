import React, { Component } from 'react'
import LanguageItem from './LanguageItem';
import fire from '../../fire';


export default class Languages extends Component {
    constructor(props){
        super(props)
        this.state={languages:[]};

    }
    componentDidMount=()=>{
        var db= fire.database();
        var projectRef= db.ref().child('languages');
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
        this.setState({languages: list});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
    render() {
        return (
            <div className="languages">
                <h1 className="title-name">Languages</h1>
                {this.state.languages.map(item=> <LanguageItem key={item.key} language={item}/>)}
            </div>
        )
    }
}
