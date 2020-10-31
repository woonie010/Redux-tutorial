export const handleClick = () => ({
    type: "handleCLick",
})

export const decrease = () => ({
    type: "DECREASE"
})

const todo = ({what, who}) => ({
    type: "todo",
    what,
    who
    })


const counter = (state = [], action) => {
    switch (action.type) {
        case "todo": {
            return [
                ...state,
                {
                    what,
                    who
                }
            ];
                
            
        }
        case "DECREASE": {
            return {
                cnt: state.cnt-1
            }
        }
        default: {
            return {...state}
        }
    }
}

export default counter;