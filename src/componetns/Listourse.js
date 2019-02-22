
import  React, { Component,Fragment  } from "react";
import './Listcourse.css';


class Listcourse extends Component {


    state = {
        isEdit : false
    }


    toggalestate = () => {

        let isEdit = this.state.isEdit;

        this.setState({
            isEdit : !isEdit
        })
    }

    renderform = () => {

        return (

            <form onSubmit={this.updateCourseInfo}> 
            
            <input type="text" defaultValue={this.props.name.name} ref={(v) => {this.input = v}}/>
            <button>Update Course</button>
    
            </form>
                  )
     }

    renderCourse = () => {

            return (
    
                <div className="list">
                <li className="list_item">{this.props.name.name}</li>
                <div>
                <button className="delete_btn" onClick={() => this.props.delete(this.props.index)}>Delete Course</button>
                <button className="edit_btn" onClick={() => {this.toggalestate()}}>Edit Course</button>
                </div>
               
                </div>
    
                     )
     }

     updateCourseInfo = (e) => {

        e.preventDefault();
        this.props.edit(this.props.index,this.input.value);
        this.toggalestate(); 
     }


     render() {

             let isEdit = this.state.isEdit;
             return (
                    <Fragment>
                            {isEdit ? this.renderform() : this.renderCourse()}           
                    </Fragment>
                )
         } 
}



export default Listcourse;