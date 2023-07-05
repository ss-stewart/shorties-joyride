import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const AddMotorcycle = (props) => {
    const [data, setData] = useState({
        make: "",
        model: "",
        year: "",
        notes: "",
        motorCycle_verification: false,
    });

    const onChangeMotorcycleInfo = (e) => {
        setData({
            ...data,
            [e.target.make]: e.target.value
        })
    }

    const onAddMotorcycleInfo = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Favourites/Add', data).then(res => console.log(res.data));
        setData({
            make: "",
            model: "",
            year: "",
            notes: "",
            motorCycle_verification: false,
        });
    }

    return (
        <div style={{marginTop: 10}}>
            <h3><AiOutlineUserAdd />Add to Favorites</h3>
            <Form onSubmit={onSubmitMotorcycleInfo}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser/>Make</Label>
                        <Input
                            type="text"
                            name="make"
                            className="form-control"
                            value={data.make}
                            onChange={onChangeMotorcycleInfo} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport/>Model</Label>
                        <Input
                            type="text"
                            name="model"
                            className="form-control"
                            value={data.model}
                            onChange={onChangeMotorcycleInfo} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport/>Year</Label>
                        <Input
                            type="number"
                            name="year"
                            className="form-control"
                            value={data.year}
                            onChange={onChangeMotorcycleInfo} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport/>Notes</Label>
                        <Input
                            type="text"
                            name="notes"
                            className="form-control"
                            value={data.notes}
                            onChange={onChangeMotorcycleInfo} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward/>Add</Button>
            </Form>
        </div>
    );
}

export default AddMotorcycle;