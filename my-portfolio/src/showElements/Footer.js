import React from 'react';
import fire from "../fire";


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state={contact:{}};
    }
    componentDidMount(){
      var db= fire.database();
      var introRef=db.ref('tram-portfolio').child('intro');
      introRef.on('value', this.gotData, this.errData);
      
  }
  gotData= (data)=>{
      this.setState({contact: data.val()});
  }
  errData=(err)=>{
      console.log("Err");
      console.log(err);
  }
  render() {
    return(
      <div className="footer">
      <div className="left-info">
        <p> @ {this.state.contact.fullname}</p>
      </div>
      <div className="right-info">
              <p>Connect at me at </p>
              <a href={this.state.contact.github}><i className="fa fa-github"></i></a>
              <a href={this.state.contact.linkedin}><i className="fa fa-linkedin-square"></i></a>
      </div>

  </div>
      
    )
  }
    
  ;
}

export default Footer;

