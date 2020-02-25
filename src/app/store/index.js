import { createStore} from "redux";
import { defaultState} from "../../server/defaultState";

export const store = createStore(
    function redcer(state = defaultState, action) {
        return state
    }
);