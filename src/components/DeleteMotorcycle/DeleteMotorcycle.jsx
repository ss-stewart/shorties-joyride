import React, useState, useEffect from 'react';
import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';
import {AiOutlineUser, AiOutlineExport, AiOutlineDelete} from 'react-icons/ai';
import axios from 'axios';

const DeleteMotorcycle = (props) => {
    const [data, setData] = useState({
        make: "",
        model: "",
        year: "",
        notes: "",
        motorcycle_verification: false
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3000/all_motorcycle/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteMotorcycleInfo = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3000/all_motorcycle/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{marginTop: 10}}>
            <h3>Delete</h3>
            <Form onSubmit={onDeleteMotorcycleInfo}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser/>Make</Label>
                        <Input
                            readOnly
                            type="text"
                            name="make"
                            className="form-control"
                            value={data.make} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport/>Model</Label>
                        <Input
                            readOnly
                            type="text"
                            name="model"
                            className="form-control"
                            value={data.model}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport/>Year</Label>
                        <Input
                            readOnly
                            type="number"
                            name="year"
                            className="form-control"
                            value={data.year}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport/>Notes</Label>
                        <Input
                            readOnly
                            type="text"
                            name="notes"
                            className="form-control"
                            value={data.notes} />
                    </Col>
                </FormGroup>
                <Button color="danger"><AiOutlineDelete/>Delete</Button>
            </Form>
        </div>
    );
}

export default DeleteMotorcycle;