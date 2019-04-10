import { ADD_TODO, TOGGLE_TODO } from '../action/index';


let initialState = {
    title:"Todo List",
    todos: [
        {
            todo: "Eat Lunch",
            completed: false
        },
        {
            todo: "Study Redux",
            completed: false
        }
    ]
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
        const newTodo = {
            todo: action.payload,
            complete: false
        }
        return {
            ...state, todos:[...state.todos, newTodo]
        }

        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map((todo, index) => 
                action.payload === index ? {
                    ...todo,complete: !todo.complete
                } : todo)
        }
        default: 
            return state;
    }
}