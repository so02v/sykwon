import React from 'react';

import folder from '../images/menu-icon/folder.png';
import chrome from '../images/menu-icon/chrome.png';
import github from '../images/menu-icon/github.png';
import gmail from '../images/menu-icon/gmail.png';
import linkedin from '../images/menu-icon/linkedin.png';
import Popup from '../components/Popup';

class MenuIcon extends React.Component {
    render(){
        return(
            <div>
                <Popup folderName="about"/>
                <div id="wrap">
                    <div className="background">
                        <nav>
                            <ul>
                                <InfoFolder item="about"/>
                                <InfoFolder item="project"/>
                                <InfoFolder item="activity"/>
                                <InfoFolder item="certificate"/>
                                <HrefIcon item="browser" hyperlink="https://www.google.co.kr" image={chrome}/>
                                <HrefIcon item="mail" hyperlink="mailto:ksy1391@gmail.com" image={gmail}/>
                                <HrefIcon item="linkedin" hyperlink="" image={linkedin}/>
                                <HrefIcon item="github" hyperlink="https://github.com/so02v" image={github}/>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

 class InfoFolder extends React.Component {

    openPopup(){
        document.getElementById('mac-popup').style.display = 'block';
    }

     render() {
         return(
            <li>
                <a href="#" className="folder" data-iframe={this.props.item} onClick={this.openPopup}>
                    <img src={folder} alt="menu-icon" className="big-img"/>
                    <p>{this.props.item}</p>
                </a>
            </li>
         )
     }
 }

 class HrefIcon extends React.Component {
    render() {
        return(
            <li>
                <a href={this.props.hyperlink} target="_blank">
                    <img src={this.props.image} alt="menu-icon" className="small-img"/>
                    <p>{this.props.item}</p>
                </a>
            </li>
        )
    }
}

export default MenuIcon;
