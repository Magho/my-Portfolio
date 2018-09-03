import React from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

import ReactProjects from './ReactProjects.js';
import AngularProjects from './AngularProjects.js';
import NodeProjects from './NodeProjects.js';

export default class Projets extends React.Component {

	constructor(props) {
        super(props)
        this.state = { activeTab: 0	 };
    }

    toggleCategories() {
    	if(this.state.activeTab === 0){
    		return <ReactProjects />
    	} else if(this.state.activeTab === 1){
    		return <AngularProjects />
    	} else if(this.state.activeTab === 2){
    		return <NodeProjects/>
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
            	<Grid>
            		<Cell col={12}>
            			{this.toggleCategories()}
            		</Cell>
            	</Grid>
            </div>    
		);
	}
}