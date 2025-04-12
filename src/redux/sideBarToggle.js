const OPENSIDEBAR = "OPENSIDEBAR";
const CLOSESIDEBAR = "CLOSESIDEBAR";

export function openSidebar() {
    return {
        type: OPENSIDEBAR,
        payload: true,
    };
}

export function closeSidebar() {
    return {
        type: CLOSESIDEBAR,
        payload: false,
    };
}

// Initial state should be an object if you're going to spread it
const initialState = {
    isOpen: false
};

export function sidebarToggleReducer(state = initialState, action) {
    switch (action.type) {
        case OPENSIDEBAR:
            return { ...state, isOpen: true };
        case CLOSESIDEBAR:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}