let initialState = {
    'home':'home',
    'loading':0,
    'userLoad':false,
    'isFail':false,
    'showRule':false,
    'showTicket':false,
    'showShare':false
};

export function reducer(state = initialState,action){
    switch (action.type){
        case 'init':
            // console.info('init');
            const newState = {...initialState, ...action.msg};
            return newState.home;
        default:return state;
    }
}