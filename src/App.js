import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Icon"></div>
          <div className="App-Title">twittex</div>
          <div><a href="https://github.com/twittex-exchange/twittex-site/wiki" target="_blank"><button>White paper</button></a></div>
        </header>
        <div>
          <div className="mth-bgs mth-bg1"></div>
        </div>        
        <div className="App-intro">
          <div className="Tagline">Trustless trade with world</div>

          <div className="flexbox">
            <div className="flexbox-c">
              <div className="thead">Decentralized</div>
              <div className="tbody">Everything is at your control, trade completely trustless</div>
            </div>           

            <div className="flexbox-c">
              <div className="thead">Social</div>
              <div className="tbody">Trade with friends and family</div>
            </div>
          </div>

          <div className="flexbox">
            <div className="flexbox-c">
              <div className="thead">Marketplace</div>
              <div className="tbody">Sell your signals and bots and earn profits from clients automagically</div>
            </div>           

            <div className="flexbox-c">
              <div className="thead">Trade Lending</div>
              <div className="tbody">Lend to trusted people earn profits from their trades</div>
            </div>
          </div>
          <div className="flexbox">
            <div className="flexbox-c cx">
            <a href="https://discord.gg/K4MgyJs" target="_blank"><div className="App-Icons App-GG"></div></a>
            </div>          
            <div className="flexbox-c cx">
            <a href="https://www.reddit.com/r/TwittexNetwork/" target="_blank"><div className="App-Icons App-RD"></div></a>
            </div>          
            <div className="flexbox-c cx">
            <a href="https://github.com/twittex-exchange/" target="_blank"><div className="App-Icons App-GH"></div></a>
            </div>
            <div className="flexbox-c cx">
            <a href="https://join.slack.com/t/twittex/shared_invite/enQtMjg2NjExOTgyNDE2LTc3NWI2MWU4ZWY2ZjllNTA0M2Q3MTU1YWE2NTE4MzExMmNkNGM0YTM4NjgxNjFjN2IzNTI0NzlkYWFkYjUwODg" target="_blank"><div className="App-Icons App-SL"></div></a>
            </div>            
          </div>



        </div>
      </div>
    );
  }
}

export default App;
