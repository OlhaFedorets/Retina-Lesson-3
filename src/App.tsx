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
            
            {/* <picture>
                <source srcSet={`${image3x} 3x, ${image2x} 2x, ${image} 1x`}/>
                <img src={image} alt="cat"/>
            </picture> */}

            <figure>
            <img src={image} srcSet={`${image2x} 2x, ${image3x} 3x`} alt="cat"/>
                <figcaption>Super cat</figcaption>
            </figure>
        </div>
    );
}

export default App;



