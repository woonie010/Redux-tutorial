

export const addTodo = () => ({
    type: "ADD_TODO"
})

export const changeInput = (content) => ({
    type: "CHANGE_INPUT",
    content
})

export const delTodo = (id) => ({
    type: "DELETE_TODO",
    id
})

const initialState = {
    input: '',
    todo: [
        {
            id: 1,
            content: '피아노 치기',
            isDone: false
        }
    ]

}

let id = 2

const todo = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO": {
             return {
                 ...state,
                 todo: [
                     ...state.todo,{
                         id: id++,
                         content: state.input,
                         isDone: false
                     }
                 ]
             }

        }

        case "CHANGE_INPUT": {
            return {
                ...state,
                input: action.content
            }
        }

        case "DELETE_TODO": {
            return {
                ...state,
                todo: [
                    ...state.todo.filter((elem) => elem.id !== action.id)
                ]
            }
        }

        default: {
            return state;
        }

    }
}


export default todo;