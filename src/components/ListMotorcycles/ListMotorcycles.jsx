import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Table, Badge from 'reactstrap';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai';

const ListBar = (props) => {
    return (
        <tr>
            <td>{props.motorcycle.make}</td>
            <td>{props.motorcycle.year}</td>
            <td>{props.motorcycle.notes}</td>
            <td>
                {props.motorcycle.motorcycle_verification ? <Badge color="primary">Verified</Badge> : <Badge color="warning">Not Verified</Badge>}
            </td>
            <td>
                <Link to={"/edit/" + props.motorcycle._id}><AiOutlineEdit /></Link>
                <Link to={"/delete/"+props.motorcycle._id}><AiOutlineDelete /></Link>
            </td>
        </tr>
    );
}

const ListMotorcycle = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3000/all_motorcycle/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3>List Motorcycle</h3>
            <Table striped style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Verification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.lists.map((current, i) => (
                        <ListBar motorcycle={current} key={i}/>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ListMotorcycle;