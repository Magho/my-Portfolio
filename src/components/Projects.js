import React from 'react';
import { Tabs, Tab } from 'react-mdl';	

export default class Projets extends React.Component {

	constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    toggleCategories() {
    	if(this.state.activeTab === 0){
    		return(
    			<div>
    				<h1> This is React </h1>
    			</div>
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
                	{this.toggleCategories()}
                </section>
            </div>    
		);
	}
}