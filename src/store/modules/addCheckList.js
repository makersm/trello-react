/**
 * Action
 * @type {string}
 */
const ADDCHECKLIST = 'addchecklist/ADDCHECKLIST';
const DEFAULT = 'addchecklist/DEFAULT';

/**
 * Action Generater
 */
export const addchecklist = (title) => ({ type: ADDCHECKLIST, title });

const initialState = {
    title: '',
    titles: [],
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export default function addCheckList(state = initialState, action) {
    switch (action.type) {
        case ADDCHECKLIST:
            let titles = state.titles.slice(0);
            titles.push(action.title);

            const value = {
                ...state,
                titles,
                title: action.title,
            };
            return value;
        default:
            return state;
    }
}