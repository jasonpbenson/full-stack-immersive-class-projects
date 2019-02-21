// an action exports a function
// the function must return an object
// the object must have a prop of 'type'

function addStudent(studentName){
    console.log("Add student action called..");
    return {
        type: 'ADD_STUDENT',
        payload: studentName
    }
}

export default addStudent;