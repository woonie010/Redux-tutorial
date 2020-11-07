export const increase = () => ({
    type: "INCREASE"
})

export const decrease = () => ({
    type: "DECREASE"
})

const initialState = {
    cnt: 0
}


const counter = (state = initialState, action) => {
    switch (action.type) {

        case "INCREASE": {
            return {
                cnt: state.cnt+1
            }
        }
 
        case "DECREASE": {
            return {
                cnt: state.cnt-1
            }
        }
        default: {
            return state;
        }
    }
}

export default counter;