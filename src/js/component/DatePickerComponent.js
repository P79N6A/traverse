import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/componentsCss.css";


export default class DatePickerComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            startDate:new Date()
        };
    }

    handleSelect=(date)=>{
        this.setState({
            startDate:date
        })
    }

    // handleChange=(date)=>{
    //     this.setState({
    //         startDate:date
    //     })
    // }

    render(){
        return(
            <DatePicker className="DatePicker"
                selected={this.state.startDate}
                onSelect={this.handleSelect}
            />
        )
    }
}