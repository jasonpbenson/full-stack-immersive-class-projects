// reducers are functions that return a piece of state

const students = [
    'Stanley',
    'Kyle',
    'Rob',
    'Ron',
    'JR',
    'Matt'
]

// all reducer funtions have 2 params
// 1. current state
// --1b. usually provide default state
// 2. info from action

export default function(state = students, action){
    if(action.type === 'ADD_STUDENT'){
        // action is relevent. Update
        let newStudents = state.slice();
        newStudents.push(action.payload)
        return newStudents;
    }else{
        return state;
    }
}