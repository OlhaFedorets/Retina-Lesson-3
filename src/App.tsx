import './App.css';
import image from './assets/images/cat.jpg';
import image2x from './assets/images/cat@2x.png';
import image3x from './assets/images/cat@3x.png';


function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>
            {/* <div className={'bg'}></div> */}
            {/* <img src={image} srcSet={`${image2x} 2x, ${image3x} 3x`} alt="cat"/> */}
            <picture>
                <source/>
                <img/>
            </picture>
        </div>
    );
}

export default App;



