import React from 'react';
import fire from '../../fire';

class ProjectItem extends React.Component {
    componentDidMount=()=>{
        var storage= fire.storage().ref();
        var id =this.props.project.key;  

        if(this.props.project.photo!==null){
            storage.child(`photos/${this.props.project.photo}`).getDownloadURL().then(function(url) {
                document.querySelector(`#project${id} .project-photo img`).src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
    }
    render(){
    return (
        <div className="project-item" id={`project${this.props.project.key}`}>
            <div className="project-photo">
                <img src={ "https://via.placeholder.com/400x300/FAD02C"} alt="project img"/>
            </div>
        <div className="project-info">
                <h4>{this.props.project.name}</h4>
                <p>{this.props.project.organization}, {this.props.project.year}</p>
                <p>{this.props.project.technologies}</p>
                <button><a href={this.props.project.link}>Project Repo</a></button>
                <button><a href={this.props.project.gallery}>Website</a></button>
        </div>
        </div>
    )}
}
export default ProjectItem;

