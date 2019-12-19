import React, { Component } from 'react'
import WorkItem from './WorkItem';
import fire from '../../fire';


export default class Works extends Component {
    constructor(props){
        super(props)
        this.state={works:[]};

    }
    componentDidMount=()=>{
        var db= fire.database();
        var projectRef= db.ref().child('works');
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
        this.setState({works: list});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
    render() {
        return (
            <div className="works">
                <h1 className="title-name">Work Experience</h1>
                {this.state.works.map(item=> <WorkItem key={item.key} work={item}/>)}
            </div>
        )
    }
}
