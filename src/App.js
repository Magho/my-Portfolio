import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
		<div style={{height: '300px', position: 'relative'}}>
		    <Layout fixedHeader>
		        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
		            <Navigation>
		                <Link to="/resume">Resume</Link>
		                <Link to="/aboutme">AboutMe</Link>
		                <Link to="/projects">Projects</Link>
		                <Link to="/contact">Contact</Link>
		            </Navigation>
		        </Header>
		        <Drawer  style={{overflow: 'hidden'}} title="Title">
		            <Navigation>
		                <Link to="/resume">Resume</Link>
		                <Link to="/aboutme">AboutMe</Link>
		                <Link to="/projects">Projects</Link>
		                <Link to="/contact">Contact</Link>
		            </Navigation>
		        </Drawer>
		        <Content>
		        	<Main />
		        </Content>
		    </Layout>
		</div>
    );
  }
}

export default App;
