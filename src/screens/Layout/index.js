import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from '../../screens/Home';
import Detail from '../../screens/Detail';

import { Container, TopBar, List, Wrapper } from './styles';

const Layout = () => {
    return (
        <Container>
            <BrowserRouter>
            <TopBar>
                <List>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail">Detail</Link></li>
                </List>
            </TopBar>

            <Wrapper>
                <Switch>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Wrapper>
            </BrowserRouter>
        </Container>
    );
};

export default Layout;