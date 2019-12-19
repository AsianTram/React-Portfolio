import React from 'react';
import fire from "../fire";


class Intro extends React.Component {
    constructor(props){
        super(props);
        this.state={intro:{}};
        
            
    
        
    }
    componentDidMount(){
        var db= fire.database();
        var introRef=db.ref('tram-portfolio').child('intro');
        introRef.on('value', this.gotData, this.errData);
        
    }
    gotData= (data)=>{
        // console.log(data.val());
        var storage= fire.storage().ref();
        if(data.val().photo!==null){
            storage.child(`photos/${data.val().photo}`).getDownloadURL().then(function(url) {
                document.querySelector('img').src = url;

            }).catch(function(error) {
                console.log("Err");
                console.log(error);
            });;
        }
        this.setState({intro: data.val()});
    }
    errData=(err)=>{
        console.log("Err");
        console.log(err);
    }
  render() {
    return(
        <div className="intro">
            <h1 className="title-name">Introduction</h1>
            <div className="profile-picture">
                <img src={ "https://via.placeholder.com/400x300/FAD02C"} alt="profile pic"/>
            </div>
            <div className="intro-info">
                <ul>
    <li><b>{this.state.intro.fullname}</b></li>
                    <li><b>Date of birth:</b> {this.state.intro.dob}</li>
                    <li><b>Address:</b> {this.state.intro.address}</li>
                    <li><b>Phone:</b> {this.state.intro.phone}</li>
                    <li><b>Gmail:</b> {this.state.intro.gmail}</li>
                    <li><b>Linkedin:</b> <a href={this.state.intro.linkedin}>{this.state.intro.linkedin}</a></li>
                    <li><b>Github:</b> <a href={this.state.intro.github}> {this.state.intro.github}</a></li>
                    <li>
                        <b>Bio:</b> {this.state.intro.bio}
                    </li>
                </ul>
            </div>
        </div>
    )
  }
    
  ;
}

export default Intro;
