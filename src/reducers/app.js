//import { merge } from 'ramda';

export function appIsFlipped(state = false, action) {
    switch(action.type) {
        case 'APP_FLIP':
            return !state;
        default:
            return state;
    }
}
