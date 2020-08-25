import React from 'react';
import StyledApp from './style';
import Table from '../table';
import BtnDelete from '../btn-delete';
import Spinner from '../spinner';
import withApiService from '../hoc';
import { setUsers, deleteUsers } from '../../actions';
import { connect } from 'react-redux';
import { compose } from '../../utils';

class App extends React.Component{

    componentDidMount(){
        const { ApiService } = this.props;
        ApiService.withAddState()
            .then((users) => {
                this.props.fetchUsers(users);
            });
    }

    deleteUsers = () => {
        const { selectSomeUsers, selectAll, deleteUsers } = this.props;
        if(selectSomeUsers || selectAll){
            deleteUsers();
        }
        // api
    }
    
    render(){
        const { loading, users } = this.props;

        if(loading){
            return (
                <Spinner />
            )
        }

        return (
            <StyledApp>
                <Table users={users} />
                <BtnDelete onClickDelete={this.deleteUsers}/>
            </StyledApp>
        )
    }
}

// функция, которая передает стейт из стора в компонент
const mapStateToProps = ({ users, loading, selectSomeUsers, selectAll }) => {
    return { users, loading, selectSomeUsers, selectAll }
}
// объект, который передает dispatch в компонент
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (users) => {
            dispatch(setUsers(users));
        },
        deleteUsers: () => {
            dispatch(deleteUsers());
        }
    }
}

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);