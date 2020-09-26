import React, { useState } from 'react';
import { lbToKl, feetToMeters, getAge } from '../../utils';
import Checkbox from '../checkbox';
import Form from '../form';
import * as s from './style';

function Record(props) {

    const [formVisible, changeVisibleForm ] = useState(false);

    const { full_name, date_of_birth, height, 
            salary, weight, isSelect, positions, id} = props.data;
    const [ titleForm ] = full_name.split(',');
    const { idx, deleteRecord, setSelect } = props; 

    return(
        <s.StyledTr>
            <Td>
                <Checkbox idx={idx} 
                          click={() => setSelect(id)} 
                          isChecked={isSelect} />
            </Td>

            <Td value={idx + 1}/>
            <Td value={full_name}/>
            <td>{getAge(date_of_birth)}</td>
            <Td value={feetToMeters(height)}/>
            <Td value={lbToKl(weight)}/>
            <Td value={salary}/>

            <Td>
                <WatchPoitions onClick={() => changeVisibleForm(true)} />
                {
                    formVisible && <Form title={`Должности сотрудника ${titleForm}`} 
                                         render={() => <RenderPositionList positions={positions} />} 
                                         actionClose={() => changeVisibleForm(false)}/>
                }
            </Td>
            <Td>
                <EditBtn />
                <DeleteBtn click={() => deleteRecord(id)} />
            </Td>
        </s.StyledTr>
    )
} 

function Td({ value, children }) {

    if(children){
        return (
            <td>
                {children}
            </td>
        )
    }
    return (
        <td>
            {
                value || 'не известно'
            }
        </td>
    )
}

function RenderPositionList({ positions }){
    console.log(positions);
    if(positions.length === 0){
        return (
            <div>
                Должности отсутствуют
            </div>
        )
    }

    return (
        <div>
            {
                positions.map((item, index) => {
                    return (
                        <s.StylePositionItem key={index}>
                            <s.StylePositionIndex>{index + 1}</s.StylePositionIndex>
                            <s.StylePositionName>{item.position_name}</s.StylePositionName>
                        </s.StylePositionItem>
                    )
                })
            }
        </div>
    )
}

function WatchPoitions({onClick}){
    return (
    <s.StylesPath onClick={onClick} xmlns="http://www.w3.org/2000/svg"  version="1.1" width="35" height="35" x="0" y="0" viewBox="0 0 456.795 456.795"><g>
        <path d="M448.947,218.475c-0.922-1.168-23.055-28.933-61-56.81c-50.705-37.253-105.877-56.944-159.551-56.944    c-53.672,0-108.844,19.691-159.551,56.944c-37.944,27.876-60.077,55.642-61,56.81L0,228.397l7.846,9.923    c0.923,1.168,23.056,28.934,61,56.811c50.707,37.252,105.879,56.943,159.551,56.943c53.673,0,108.845-19.691,159.55-56.943    c37.945-27.877,60.078-55.643,61-56.811l7.848-9.923L448.947,218.475z M228.396,315.039c-47.774,0-86.642-38.867-86.642-86.642    c0-7.485,0.954-14.751,2.747-21.684l-19.781-3.329c-1.938,8.025-2.966,16.401-2.966,25.013c0,30.86,13.182,58.696,34.204,78.187    c-27.061-9.996-50.072-24.023-67.439-36.709c-21.516-15.715-37.641-31.609-46.834-41.478c9.197-9.872,25.32-25.764,46.834-41.478    c17.367-12.686,40.379-26.713,67.439-36.71l13.27,14.958c15.498-14.512,36.312-23.412,59.168-23.412    c47.774,0,86.641,38.867,86.641,86.642C315.037,276.172,276.17,315.039,228.396,315.039z M368.273,269.875    c-17.369,12.686-40.379,26.713-67.439,36.709c21.021-19.49,34.203-47.326,34.203-78.188s-13.182-58.697-34.203-78.188    c27.061,9.997,50.07,24.024,67.439,36.71c21.516,15.715,37.641,31.609,46.834,41.477    C405.91,238.269,389.787,254.162,368.273,269.875z" fill="#4c4c4c"/>
        <path d="M173.261,211.555c-1.626,5.329-2.507,10.982-2.507,16.843c0,31.834,25.807,57.642,57.642,57.642    c31.834,0,57.641-25.807,57.641-57.642s-25.807-57.642-57.641-57.642c-15.506,0-29.571,6.134-39.932,16.094l28.432,32.048    L173.261,211.555z" fill="#4c4c4c"/>
    </g></s.StylesPath>
    )
}

function EditBtn(props){

    return (
        <s.StylesPath xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
            <path fill="#4C4C4C" fillRule="evenodd" d="M15.126 2c.585 0 1.146.261 1.556.723l2.773 3.101c.413.462.645 1.088.645 1.741s-.232 1.28-.645 1.74L9.332 20.625c-.625.806-1.51 1.3-2.525 1.378h-4.59v-1l.002-4.215c.076-1.054.515-2.035 1.183-2.694L13.568 2.725C13.98 2.26 14.541 2 15.126 2zM6.744 20.005c.478-.038.923-.287 1.28-.743l6.761-7.562-3.357-3.755-6.801 7.605c-.362.358-.586.86-.623 1.318v3.135l2.74.002zM12.693 6.53l3.357 3.755 2.14-2.394c.078-.087.121-.204.121-.327 0-.122-.043-.24-.12-.326l-2.776-3.104c-.076-.086-.18-.135-.29-.135-.108 0-.212.049-.289.135L12.693 6.53z" clipRule="evenodd"/>
        </s.StylesPath>
    )
}

function DeleteBtn({click}){

    return (
        <s.StylesPathDelete onClick={click} xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24">
            <path fill="#4C4C4C" fillRule="evenodd" d="M8.762 1h5.365c.987 0 1.788.895 1.788 2v1h2.683c.987 0 1.788.895 1.788 2v2c0 1.105-.8 2-1.788 2h-.072l-.823 11c0 1.105-.8 2-1.788 2H6.973c-.988 0-1.788-.895-1.785-1.917L4.362 10h-.071c-.988 0-1.789-.895-1.789-2V6c0-1.105.8-2 1.789-2h2.682V3c0-1.105.8-2 1.789-2zM4.29 6h14.307v2H4.29V6zm1.865 4h10.576l-.814 10.917-.003.083H6.973l-.817-11zm7.97-7v1H8.763V3h5.365z" clipRule="evenodd"/>
        </s.StylesPathDelete>
    )
}


export default Record;