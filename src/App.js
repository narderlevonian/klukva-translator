import "./App.css";
import logo from './media/logo.svg';
import Board from './Board';

function App() {
    return (
        <div className="App">
            <div className="Background" />
            <img className="Logo" src={logo} alt="logo" />
            <div className="Header">
                <div className="Header-Content">
                    <h1>CYRILLIC TO LATIN</h1>
                    <p>
                    Here you can translate the text of the Russian language from Cyrillic to Latin (three historical versions proposed by the Romanization commission headed by Professor Yakovlev, as well as a modern author's adaptation).
                    </p>
                    <p>Version: 0.3.0;<br/>Author: <a href="http://narderlevonian.space">Nar der Levonian</a></p>
                </div>
            </div>
            <Board />
        </div>
    );
}

export default App;
