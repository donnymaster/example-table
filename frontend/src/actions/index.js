const deleteUsers = () => {
    return {
        type: 'DELETE_USER'
    }
}

const setUsers = (newUsers) => {
    return {
        type: 'SET_USERS',
        payload: newUsers
    }
}

const deleteUser = (id) => {
    return {
        type: 'DELETE_USER_ID',
        payload: id
    }
}

const changeSelect = (id) => {
    return {
        type: 'CHANGE_SELECT',
        payload: id
    }
}

const changeSelectAll = (items) => {
    return {
        type: 'CHANGE_ALL_SELECT',
        payload: items
    }
}

export {
    deleteUsers,
    changeSelect,
    setUsers,
    changeSelectAll,
    deleteUser
}