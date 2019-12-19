import React from 'react'
import fire from '../../fire';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state={projects:[]};

    }
    componentDidMount=()=>{
        var db= fire.database();
        var projectRef= db.ref('tram-portfolio').child('projects');
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
        this.setState({projects: list});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
    render(){
    return (
        <div className="projects">
        <h1 className="title-name">Projects</h1>
        
            {this.state.projects.map(item => <ProjectItem key={item.key} project={item}/>)}
                  
    </div>
    )}
}
export default Projects;
