import React from "react";
import "./styles.css";
import { styles } from "./styles";
import NavBar from "./components/NavBar";
import Album from "./components/Album";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }
  handlerCounterUp() {
    this.setState({ counter: this.state.counter + 1})
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={styles.heading}>Contador: {this.state.counter}</h1>
        <main>
          <div className="album py-5 bg-light" id="divMain">
            <div className="container">
              <div id="contenedor-productos">
                <button onClick={this.handlerCounterUp}>Comprar</button>
                  <Album 
                    album='Proof'
                    img='./img/proof.png'
                    precio='$7000'
                    />
                    <Album 
                    album='Butter'
                    img='./img/butter.jpg'
                    precio='$2500'
                    />
                    <Album 
                    album='Evermore'
                    img='./img/evermore.webp'
                    precio='$7500'
                    />
                    <Album 
                    album='Be'
                    img='./img/be.jpg'
                    precio='$6000'
                    />
                    <Album 
                    album='Dynamite'
                    img='./img/dynamite.jpg'
                    precio='$2000'
                    />
                    <Album 
                    album='Folklore'
                    img='./img/folklore.jpg'
                    precio='$6500'
                    />
                    <Album 
                    album='Map Of The Soul: 7'
                    img='./img/mots7.jpg'
                    precio='$5500'
                    />
                    <Album 
                    album='Lover'
                    img='./img/lover.webp'
                    precio='$5500'
                    />
                    <Album 
                    album='Map Of The Soul: Persona'
                    img='./img/motsp.jpg'
                    precio='$5000'
                    />
                    <Album 
                    album='Love Yourself: Answer'
                    img='./img/lya.jpg'
                    precio='$4500'
                    />
                    <Album 
                    album='Love Yourself: Tear'
                    img='./img/lyt.jpg'
                    precio='$5000'
                    />
                    <Album 
                    album='Love Yourself: Her'
                    img='./img/lyh.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='Reputation'
                    img='./img/rep.jpg'
                    precio='$5500'
                    />
                    <Album 
                    album='You Never Walk Alone'
                    img='./img/ynwa.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='Wings'
                    img='./img/wings.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='The Most Beautiful Moments In Life: Young Forever'
                    img='./img/tmbmilptyf.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='The Most Beautiful Moments In Life Pt 2'
                    img='./img/tmbmilpt2.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='The Most Beautiful Moments In Life Pt 1'
                    img='./img/tmbmilpt1.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='1989'
                    img='./img/1989.webp'
                    precio='$4000'
                    />
                    <Album 
                    album='Dark And Wild'
                    img='./img/dandw.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='SKOOL LUV AFFAIR'
                    img='./img/ska.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='O!RUL8,2?'
                    img='./img/ORL82.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='2 COOL 4 SKOOL'
                    img='./img/2c4s.jpg'
                    precio='$4000'
                    />
                    <Album 
                    album='Speak Now'
                    img='./img/speakn.jpg'
                    precio='$4500'
                    />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
