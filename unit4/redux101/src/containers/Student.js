import React, { Component } from 'react';

// we would like to inform this component from redux
// need glue
// ie this container needs to know about store
// so that it can use store's state
// and update self as needed
// connect method from react-redux is the glue

import { connect } from 'react-redux'

// need bindActionCreators from redux
// so that actions dispatch to reducers

import { bindActionCreators } from 'redux';

class Student extends Component{
    render(){
        const students = this.props.rightSideOfRoom.map((student)=> {
            return(<li>{student}</li>)
        })
        return(
            <div>
                <h1>Students</h1>
                {students}
            </div>
        )
    }
}

// need function to map the redux state
// to this components props
// redux state always arrives as props

function mapStateToProps(state){
    // the state parameter in mapStateToProps IS the root reducer
    // this function returns an object
    // property will be props in this component
    // value will be the piece of state in the reducer
    return{
        rightSideOfRoom: state.students
    }

}
console.log(connect);

// export default Student
// don't export compnent anymore
// export connect and feed it component
export default connect(mapStateToProps)(Student);