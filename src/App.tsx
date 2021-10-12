import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

import Footer from './Components/HomeComponents/Footer';
import Navbar from './Components/HomeComponents/Navbar';
import Card from './Components/HomeComponents/Card';
import Overview from './Components/HomeComponents/Overview';
import Card2 from './Components/HomeComponents/Card2';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage></HomePage>
                    </Route>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                    <Route path="/navbar">
                        <Navbar></Navbar>
                        
                    </Route>
                    <Route path="/signup">
                        <SignupPage></SignupPage>
                    </Route>
                    <Route path="/footer">
                        <Footer></Footer>
                    </Route>
                    <Route path="/card">
                        <Card></Card>
                    </Route>
                   
                    <Route path="/overview">
                        <Overview></Overview>
                    </Route>

                    <Route path="/card2">
                        <Card2></Card2>
                    </Route>
                    
                
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default App;