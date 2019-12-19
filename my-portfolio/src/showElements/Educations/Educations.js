import React, { Component } from 'react'
import EducationItem from './EducationItem';
import fire from '../../fire';


export default class Educations extends Component {
    constructor(props){
        super(props)
        this.state={educations:[]};

    }
    componentDidMount=()=>{
        var db= fire.database();
        var projectRef= db.ref().child('educations');
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
        this.setState({educations: list});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
    render() {
        return (
            <div className="educations">
                <h1 className="title-name">Education</h1>
                {this.state.educations.map(item=> <EducationItem key={item.key} education={item}/>)}
            </div>
        )
    }
}
