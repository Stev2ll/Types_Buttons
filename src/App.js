import './App.css';
import MiLogo from './img/MI-Logo.gif';
import Boton from './componentes/Boton.jsx';


function App() {
  return (
    <div className="App">
     <nav className='nav'>
          <img
            className="MiLogo"
            src={MiLogo}
            alt='Mi Logo'
          />
        <ul className='list-nav'>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
     </nav>
     <main>
        <div className='container-buttons'>
          <h1>Buttons</h1>
          <div className="row">
          <Boton
            text="&lt;Button /&gt;"
            bgColor="#E0E0E0"
            color="#3F3F3F"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(51, 51, 51, 0.2)"
          />
          <Boton
            text="&:hover, &:focus"
            bgColor="#AEAEAE"
            color="#3F3F3F"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(51, 51, 51, 0.2)"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button variant='outline'/&gt;"
            bgColor="#fff"
            color="#3D5AFE"
            btnText="Default"
            border="1px solid #3D5AFE"
          />
          <Boton
            text="&:hover, &:focus"
            bgColor="rgba(41, 98, 255, 0.1)"
            color="#3D5AFE"
            btnText="Default"
            border="1px solid #3D5AFE"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button variant='text'/&gt;"
            bgColor="#fff"
            color="#3D5AFE"
            btnText="Default"
            border="none"
          />
          <Boton
            text="&:hover, &:focus"
            bgColor="rgba(41, 98, 255, 0.1)"
            color="#3D5AFE"
            btnText="Default"
            border="none"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button disableShadow/&gt;"
            bgColor="#3D5AFE"
            color="#FFFFFF"
            btnText="Default"
            border="none"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button disabled/&gt;"
            bgColor="#E0E0E0"
            color="#9E9E9E"
            btnText="Disabled"
            cursor="not-allowed"
            border="none"
          />
          <Boton
            text="&lt;Button variant='text' disabled/&gt;"
            bgColor="#fff"
            color="#9E9E9E"
            btnText="Disabled"
            cursor="not-allowed"
            border="none"
          />
        </div>

        {/* LOCAL_GROCERY_STORE ROW*/}

        <div className="row">
          <Boton
            text="&lt;Button startIcon='local_grocery_store'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            class="store-row"
            startIcon="local_grocery_store"
          />
          <Boton
            text="&lt;Button endIcon='local_grocery_store'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            class="store-row"
            endIcon="local_grocery_store"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button size='sm'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="73px"
            height="32px"
          />
          <Boton
            text="&lt;Button size='md'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="81px"
            height="36px"
          />
          <Boton
            text="&lt;Button size='lg'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="93px"
            height="42px"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;Button color='default'/&gt;"
            bgColor="#E0E0E0"
            color="#3F3F3F"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
          />
          <Boton
            text="&lt;Button color='primary'/&gt;"
            bgColor="#2962FF"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
          />
          <Boton
            text="&lt;Button color='secondary'/&gt;"
            bgColor="#455A64"
            color="#FFFFFF"
            btnText="Secondary"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="104px"
          />
          <Boton
            text="&lt;Button color='danger'/&gt;"
            bgColor="#D32F2F"
            color="#FFFFFF"
            btnText="Danger"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="81px"
          />
        </div>
        <div className="row">
          <Boton
            text="&lt;&:hover, &:focus /&gt;"
            bgColor="#AEAEAE"
            color="#3F3F3F"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
          />
          <Boton
            text="&lt;Button color='primary'/&gt;"
            bgColor="#0039CB"
            color="#FFFFFF"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            pColor="transparent"
          />
          <Boton
            text="&lt;Button color='secondary'/&gt;"
            bgColor="#1C313A"
            color="#FFFFFF"
            btnText="Secondary"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="104px"
            pColor="transparent"
          />
          <Boton
            text="&lt;Button color='danger'/&gt;"
            bgColor="#9A0007"
            color="#FFFFFF"
            btnText="Danger"
            boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
            width="81px"
            pColor="transparent"
          />
        </div>
      </div>
     </main>
     <footer>
        Created by{" "}
        <a
          href="https://github.com/Stev2ll"
          target="_blank"
          rel="noreferrer"
        >
          Stev2ll
        </a>{" "}
        - devChallenges.io
      </footer>
    </div>
  );
}
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
export default App;
