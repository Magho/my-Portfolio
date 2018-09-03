import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, IconButton } from 'react-mdl';	

export default class Projets extends React.Component {

	constructor(props) {
        super(props)
        this.state = { activeTab: 0	 };
    }

    toggleCategories() {
    	if(this.state.activeTab === 0){
    		return(
				<Card shadow={0} style={{width: '350px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>
				    	my first project
				    </CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <a href="#" target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
				        <a href="#" target="_blank" rel="noopener noreferrer"><Button colored>CodePen</Button></a>
				        <a href="#" target="_blank" rel="noopener noreferrer"><Button colored>LiveDemo</Button></a>
				    </CardActions>
				</Card>
    		)
    	} else if(this.state.activeTab === 1){
    		return(
    			<div>
    				<h1> This is Angular </h1>
    			</div>
    		)
    	} else if(this.state.activeTab === 2){
    		return(
    			<div>
    				<h1> This is NodeJs </h1>
    			</div>
    		)
    	}  else if(this.state.activeTab === 3){
    		return(
    			<div>
    				<h1> This is Laravel </h1>
    			</div>
    		)
    	}
    }

	render(){
		return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJs</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>
                <section className="projects-grid">
                	<Grid className="projects-grid">
                		<Cell>
                			<div className="content">
                				{this.toggleCategories()}
                			</div>
                		</Cell>
                	</Grid>
                </section>
            </div>    
		);
	}
}