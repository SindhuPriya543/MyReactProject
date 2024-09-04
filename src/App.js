import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { MainComponent } from './MainComponent';
import { Recaptcha } from './Recaptcha';
import { WelcomeComponent } from './WelcomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <GoogleOAuthProvider clientId='775106332327-vcsqur6sl4m22lnhvn8f1pt1fnt2ci04.apps.googleusercontent.com'>
            <BrowserRouter>
              <Routes>

                <Route path = '/' element = {<MainComponent/>}>   </Route>
                <Route path = '/Welcome' element = {<WelcomeComponent/>}>   </Route>
                <Route path = '/Recaptcha' element = {<Recaptcha/>}>   </Route>
              </Routes>
            
            </BrowserRouter>

          </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
