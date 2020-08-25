const initialState = {
    users: [],
    loading: true,
    selectAll: false,
    btnState: 'disable',
    selectSomeUsers: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_USER': // удаление юзера или юзеров
            const filterUsers = state.users.filter(user => {
                return !user.isSelect;
            })
            return {
                ...state,
                selectAll: false,
                users: filterUsers
            }
        case 'DELETE_USER_ID': // удаление по айди юзера
            const deletedUser = state.users.filter(user => {
                return user.id != action.payload;
            })
            return {
                ...state,
                users: deletedUser
            }
        case 'CHANGE_SELECT': // смена select
            const selectUser = state.users.map(user => {
                if(action.payload == user.id){
                    return {
                        ...user,
                        isSelect: !user.isSelect
                    }
                }
                return user;
            })
            return {
                ...state,
                btnState: 'active',
                users: selectUser
            }
        case 'CHANGE_ALL_SELECT': // смена всех select
            const newUsers = state.users.map(user => {
                return {
                    ...user,
                    isSelect: action.payload
                }
            });
            return {
                ...state,
                selectAll: action.payload,
                users: newUsers,
                btnState: action.payload ? 'active' : 'disable'
            }
        case 'SET_USERS':
            return {
                users: action.payload,
                loading: false,
                selectAll: false,
                btnState: 'disable',
                selectSomeUsers: true
            }
        default:
            return state;

    }
}

export default reducer;