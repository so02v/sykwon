import React from 'react';
import folder from '../images/menu-icon/folder.png';

class Popup extends React.Component {
    render(){
        return(
            <FolderIcon item={this.props.item} folderName={this.props.folderName}/>
        )
    }
}

 class FolderIcon extends React.Component {
     render() {
         return(
            <div id="mac-popup">
                <header>
                    <div className="mac-btn">
                        <div id="closed">
                            <span>×</span>
                        </div>
                        <div>
                            <span>-</span>
                        </div>
                        <div>
                            <span>＋</span>
                        </div>
                    </div>
                    <div className="folder-name">
                        <img src={folder} alt="folder"/>
                        <p>{this.props.folderName}</p>
                    </div>
                    <div className="arrow-btn">
                        <div id="back">
                        <span>&lt;</span>
                        </div>
                        <div id="forward">
                        <span>&gt;</span>
                        </div>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li>
                            <a href="" className="folder" data-iframe="about">
                                <img src={folder} alt="folder"/>
                                <p>about</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className="folder" data-iframe="project">
                                <img src={folder} alt="folder"/>
                                <p>project</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className="folder" data-iframe="activity">
                                <img src={folder} alt="folder"/>
                                <p>activity</p>
                            </a>
                        </li>
                        <li>
                            <a href="" className="folder" data-iframe="certificate">
                                <img src={folder} alt="folder"/>
                                <p>certificate</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* {items.map(i => { return <Icon key={i} item={i}/>}) } */}
                <section>
                    <iframe src="" id="iframe" frameBorder="0"></iframe>
                </section>
            </div>
         )
     }
 }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

export default Popup;