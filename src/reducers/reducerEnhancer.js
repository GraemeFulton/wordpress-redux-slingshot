/**
 * Use this reducer enhancer to store specific control instance state by key.
 * The key will be resolved using the controlInstanceKeyResolver function parmeter which defaults to use the controlInstanceKey member of the action's meta object (i.e action.meta.controlInstanceKey)
 * If the key is not a string then the action will be ignored and will not pass to the enhanched reducer.
 * @param {function} reducer - the reducer to enhance
 * @param {function} controlInstanceKeyResolver - an optional function to get the instance key from the action
 */
export function instanceMapReducerEnhancer(
    reducer: Redux.Reducer,
    controlInstanceKeyResolver: ((action) => string) = defaultKeyResolver) {
    return function (state = {}, action) {
        const instanceKey = controlInstanceKeyResolver(action);
        if (typeof (instanceKey) === "string") {
            let instanceState = reducer(state[instanceKey], action);
            const newState = Object.assign({}, state, { [instanceKey]: instanceState });
            return newState
        } else {
            return state;
        }
    }
}

function defaultKeyResolver(action) {
    return action.meta ? action.meta.controlInstanceKey : undefined;
}
