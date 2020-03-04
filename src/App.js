import React from 'react';
import folder from './images/menu-icon/folder.png';
import chrome from './images/menu-icon/chrome.png';
import gmail from './images/menu-icon/gmail.png';
import linkedin from './images/menu-icon/linkedin.png';
import github from './images/menu-icon/github.png';
import './App.css';
import './stylesheet/style.css';

function App() {
  return (
    <div>
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
              <p>design</p>
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
        <section>
          <iframe src="" id="iframe" frameborder="0"></iframe>
        </section>
      </div>
      <div id="wrap">
        <div className="background">
          <nav>
            <ul>
              <li>
                <a href="#" className="folder" data-iframe="about">
                  <img src={folder} alt="menu-icon" class="big-img"/>
                  <p>about</p>
                </a>
              </li>
              <li>
                <a href="#" className="folder" data-iframe="project">
                  <img src={folder} alt="menu-icon" class="big-img"/>
                  <p>project</p>
                </a>
              </li>
              <li>
                <a href="#" class="folder" data-iframe="activity">
                  <img src={folder} alt="menu-icon" class="big-img"/>
                  <p>activity</p>
                </a>
              </li>
              <li>
                <a href="#" class="folder" data-iframe="certificate">
                  <img src={folder} alt="menu-icon" class="big-img"/>
                  <p>certificate</p>
                </a>
              </li>
              <li>
                <a href="https://www.google.co.kr" target="_blank">
                  <img src={chrome} alt="menu-icon" class="small-img"/>
                  <p>browser</p>
                </a>
              </li>
              <li>
                <a href="mailto:ksy1391@gmail.com">
                  <img src={gmail} alt="menu-icon" class="small-img"/>
                  <p>mail</p>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={linkedin} alt="menu-icon" class="small-img"/>
                  <p>linkedin</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/so02v" target="_blank">
                  <img src={github} alt="menu-icon" class="small-img"/>
                  <p>github</p>
                </a>
              </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  );
}

export default App;
