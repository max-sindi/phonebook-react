import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
            <Grid>
              <Grid.Column>

              </Grid.Column>
            </Grid>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
