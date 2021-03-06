import React, { Component } from 'react';
import CompletionRatePieChart from "./CompletionRatePieChart.js"

class CompletionRateStatus extends Component {

  render() {



    if (!this.props.selectedAssignmentData["displayData"] || Object.keys(this.props.selectedAssignmentData["displayData"]["pie"]).length === 0){
       return null
     } //Check whether an assignment has been selected in assignment list - do not render anything if nothing has been selected

  else {
      const pieData2 = this.props.selectedAssignmentData["displayData"]["pie"];
    const completed = pieData2["data"][0]["Value"]
  	const notCompleted = pieData2["data"][1]["Value"]
  	const total = completed + notCompleted
  	const percentage = Math.round(completed*100/total)
    return (
      <div className="assignments-title">
			<h3>
				Assignment submission rate
			</h3>
			<div className = "left-sub-pane">
  				<CompletionRatePieChart pieData2 = {pieData2}/>
  			</div>
  			<div className = "right-sub-pane">
				 <h4 style={{color:'#2b2b2b', fontWeight: 100, fontSize:'2rem'}}>
  				{percentage}%
				</h4>
  			</div>
  		</div>
  	);
  }
}
}

export default CompletionRateStatus;
