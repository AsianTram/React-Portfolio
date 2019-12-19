import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={toggle:false};
    }
    handleToggle(){
        this.setState({toggle:!this.state.toggle});
    }
    render(){
    return (
        <div>
        <div className="navbar">
        <ul>
            <Link to="/"><li>Introduction</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/education"><li>Education</li></Link>
            <Link to="/certificates"><li>Certificates</li></Link>
            <Link to="/works"><li>Works</li></Link>
            <Link to="/languages"><li>Languages</li></Link>

        </ul>
    </div>
    <div className="small-navbar">
    <div className="menu-icon" onClick={()=>this.handleToggle()}>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
    </div>
<ul style={!this.state.toggle?{display: 'none'}:{display: 'inline'}}>
            <Link to="/"><li>Introduction</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/education"><li>Education</li></Link>
            <Link to="/certificates"><li>Certificates</li></Link>
            <Link to="/works"><li>Works</li></Link>
            <Link to="/languages"><li>Languages</li></Link>
</ul>
</div>
</div>
    )}
}
