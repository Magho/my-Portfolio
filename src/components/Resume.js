import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from 'avataaars';
import Education from './Education.js';
import Experience from './Experience.js';
import Skills from './Skills.js';

export default class Resume extends React.Component {
	render(){
		return(
			<div> 
				<Grid>
					<Cell col={4}>
						<div className="resume-main-div">
							<Avatar
								style={{paddingTop:'30px', height:'20em'}}
								avatarStyle='Circle'
								topType='ShortHairShortFlat'
								accessoriesType='Blank'
								hairColor='Black'
								facialHairType='BeardLight'
								facialHairColor='Brown'
								clotheType='ShirtCrewNeck'
								clotheColor='Gray02'
								eyeType='Wink'
								eyebrowType='Default'
								mouthType='Smile'
								skinColor='Light'
							/>
							<h2 style={{paddingTop:'.8em', }}> Mohamed el-maghraby</h2>
							<h4 style={{color:'grey'}}> Programmer </h4>
							
							<hr style={{borderTop : '3px solid #833fb2', width: '75%', margin:'auto'}}/>
							
							<p style = {{margin:'auto', width:'75%', paddingTop:'1em', paddingBottom:'1em'}}>
							Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,
							</p>

							<hr style={{borderTop : '3px solid #833fb2', width: '75%', margin:'auto'}}/>

							<h5> Address </h5>
							<p> Lorem Ipsum is simply dummy text of the printing </p>
							<h5> phone </h5>
							<p> (+20)1207734935) </p>
							<h5> Email </h5>
							<p> mmaghraby134@gmail.com </p>
							<h5> Web </h5>
							<p> mywebsite.com </p>

							<hr style={{borderTop : '3px solid #833fb2', width: '75%', margin:'auto'}}/>

						</div>
					</Cell>
					<Cell className = "resume-right-side" col={8}>

						<h3 style={{fontFamily:'Anton', color:'#e22947'}}> Education </h3>
						<Education
							startYear={2016}
							endYear={2020}
							schoolName="Alexanderia University"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,"
						/>
						<Education
							startYear={2016}
							endYear={2020}
							schoolName="Alexanderia University"
							schoolDescription="Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,"
						/>

						<hr style={{borderTop : '3px solid #e22947', width: '75%', margin:'auto'}}/>

						<h3 style={{fontFamily:'Anton', color:'#e22947'}}> Experience </h3>
						<Experience
							startYear={2016}
							endYear={2020}
							jobName="Alexanderia University"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,"
						/>
						<Experience
							startYear={2016}
							endYear={2020}
							jobName="Alexanderia University"
							jobDescription="Lorem Ipsum is simply dummy text of the printing and
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen
							 book. It has survived not only five centuries,"
						/>

						<hr style={{borderTop : '3px solid #e22947', width: '75%', margin:'auto'}}/>

						<h3 style={{fontFamily:'Anton', color:'#e22947'}}> Skills </h3>
						<Skills 
							skill="Java script"
							progress={100}
						/>
						<Skills 
							skill="Java script"
							progress={70}
						/>
						<Skills 
							skill="Java script"
							progress={40}
						/>						
						<Skills 
							skill="Java script"
							progress={80}
						/>
						<Skills 
							skill="Java script"
							progress={50}
						/>

					</Cell>
				</Grid>
			</div>
		);
	}
}