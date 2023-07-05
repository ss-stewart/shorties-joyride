import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';
import {AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward} from 'react-icons/ai';
import axios from 'axios';

const EditMotorcycle = (props) => {
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

    const onChangeMotorcycleInfo = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
    }

    const onSubmitMotorcycleInfo = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/all_motorcycle/edit/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{marginTop: 10}}>
            <h3><AiOutlineUserAdd/>Edit</h3>
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
                <FormGroup check row>
                    <Col>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="motorcycle_verification"
                                defaultChecked={data.motorcycle_verification ? true : false}
                                value={data.motorcycle_verification ? Boolean(true) : Boolean(false)}
                                onChange={onChangeMotorcycleInfo}
                                required />{data.motorcycle_verification ? "Data is verified" : "Data isn't verified"}
                        </Label>
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward/>Verified Data</Button>
            </Form>
        </div>
    );
}

export default EditMotorcycle;