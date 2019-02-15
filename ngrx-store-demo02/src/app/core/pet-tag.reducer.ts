import { Action } from 'rxjs/scheduler/Action';
import { PetTag, initialTag } from './pet-tag.model';

/* 创建规约函数， 这个函数接受action， 更新store */

export function petTagReducer(state: PetTag = initialTag, action) {
    switch (action.type) {
        case 'SELECT_SGAPE':
            return Object.assign({}, state, {
                shape: action.payload
            });
        case 'SELECT_FONT':
            return Object.assign({}, state, {
                font: action.payload
            });
        case 'ADD_TEXT':
            return Object.assign({}, state, {
                text: action.payload
            });
        case 'TOGGLE_CLIP':
            return Object.assign({}, state, {
                clip: !state.clip
            });
        case 'TOGGLE_GEMS':
            return Object.assign({}, state, {
                gems: !state.clip
            });
        case 'COMPLETE':
            return Object.assign({}, state, {
                complete: action.payload
            });
        case 'RESET':
            return Object.assign({}, state, initialTag);
        default:
            return state;
    }
}
