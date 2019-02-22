import React, { Component } from 'react';
import './App.css';
import Listcourse from './componetns/Listourse';
import Addcourse from './componetns/Addcourse';


class App extends Component {

  state = {

      courses : [
        {
          name : "HTML"
        },
        {
          name : "CSS"
        },
        {
          name : "Javascrtipt"
        }
      ],

      cureent : ''

  }


  updateinput = (e) => {

    this.setState( {
      cureent : e.target.value
    })

  }

  Addcourse = (e) => {
    e.preventDefault();

    let cureentValue = this.state.cureent;
    let courses = this.state.courses;

    courses.push({name: cureentValue});

    this.setState({
      courses,
      cureent: '' 
    })

  }


  deleteCourse = (i) => {
    let courses = this.state.courses;

    courses.splice(i,1);
    this.setState({
      courses
    })

  }


  editCourse = (i,value) => {

    let courses = this.state.courses;
    let course = courses[i];
    course['name'] = value;
    this.setState({
      courses
    })

  }



  render() {

    const {courses} = this.state;
    const ListCourse = courses.map((course,i) => {

        return (

          <Listcourse name={course} key={i} delete={this.deleteCourse} index={i} edit={this.editCourse}/>
          
        )
    })
    return (
      <div className="content">
      
      <Addcourse update={this.updateinput} add={this.Addcourse} cureent={this.state.cureent}/>
      {ListCourse}


      </div>
    );
  }
}

export default App;
