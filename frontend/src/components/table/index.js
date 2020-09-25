import React from 'react';
import Checkbox from '../checkbox';
import Record from '../record';
import { changeSelectAll, deleteUser, changeSelect } from '../../actions';
import withApiService from '../hoc';
import { connect } from 'react-redux';
import { compose } from '../../utils';

import * as s from './style';

class Table extends React.Component{

    changeSelectAll = () => {
        const { selectAll, changeAll } = this.props;
        changeAll(!selectAll);
    }

    deleteUserAction = (id) => {
        const result = window.confirm('Вы уверенны что хотите удалить польователя?');
        if(!result){
            return;
        }
        const { deleteUser, ApiService } = this.props;
        deleteUser(id);
        // api delete user
        ApiService.delete_user(id)
            .then((res) => console.log(res));
    }

    setSelectUser = (id) => {
        const { changeSelect } = this.props;
        changeSelect(id);
    } 

   render(){
       const { users, selectAll, selectSomeUsers } = this.props;
    return(
        <div>
            <s.StyledTitle>Таблица пользователей</s.StyledTitle>
            <s.StyledTable>
                <TableHead selectSomeUsers={selectSomeUsers} 
                           changeSelectAll={this.changeSelectAll} 
                           selectAll={selectAll}/>
                <s.StyledTbody>
                    {
                        users.map((user, id) => {
                            return (
                                <Record data={user} 
                                        idx={id} 
                                        key={user.id}
                                        deleteRecord={this.deleteUserAction}
                                        setSelect={this.setSelectUser} />
                            )
                        })
                    }
                </s.StyledTbody>
            </s.StyledTable>
        </div>
    )
   }
}

function TableHead({ changeSelectAll, selectAll, selectSomeUsers }) {

    const fields = ['№', 'ФИО', 'Возраст (Лет)', 'Рост', 'Вес', 'Зарплата', 'Должности'];
    console.log(selectSomeUsers);
    return (
        <s.StyledThead>
            <tr>
                <s.StyledTheadTh>
                    <Checkbox idx={`title`} disabled={selectSomeUsers} click={changeSelectAll} isChecked={selectAll} />
                </s.StyledTheadTh>
               {
                   fields.map((item, id) => {
                       return (
                        <s.StyledTheadTh key={id}>
                            {item}
                        </s.StyledTheadTh>
                       )
                   })
               }
                <th></th>
            </tr>
        </s.StyledThead>
    )
}

// функция, которая передает стейт из стора в компонент
const mapStateToProps = ({ selectAll, selectSomeUsers }) => {
    return { selectAll, selectSomeUsers }
}
// объект, который передает dispatch в компонент
const mapDispatchToProps = (dispatch) => {
    return {
        changeAll: (checked) => {
            dispatch(changeSelectAll(checked));
        },
        deleteUser: (id) => {
            dispatch(deleteUser(id));
        },
        changeSelect: (id) => {
            dispatch(changeSelect(id));
        }
    }
}

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Table);