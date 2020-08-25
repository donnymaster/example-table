import React from 'react';
import Input from '../input';
import Record from '../record';
import { changeSelectAll, deleteUser, changeSelect } from '../../actions';
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
        const { deleteUser } = this.props;
        deleteUser(id);
        // api delete user
    }

    setSelectUser = (id) => {
        const { changeSelect } = this.props;
        changeSelect(id);
    } 

   render(){
       const { users, selectAll } = this.props;
    return(
        <div>
            <s.StyledTitle>Таблица пользователей</s.StyledTitle>
            <s.StyledTable>
                <TableHead changeSelectAll={this.changeSelectAll} selectAll={selectAll}/>
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

function TableHead({ changeSelectAll, selectAll }) {

    const fields = ['№', 'ФИО', 'Возраст (Лет)', 'Рост', 'Вес', 'Зарплата'];
    return (
        <s.StyledThead>
            <tr>
                <s.StyledTheadTh>
                    <Input click={changeSelectAll} isChecked={selectAll} />
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
const mapStateToProps = ({ selectAll }) => {
    return { selectAll }
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
    connect(mapStateToProps, mapDispatchToProps)
)(Table);