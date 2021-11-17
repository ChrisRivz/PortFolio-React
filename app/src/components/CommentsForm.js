import React, { useState } from 'react'
import { Container, Card, Form, Image, Row, Col, Button, Spinner, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Avatar_img from '../images/Avatar-2.jpg'
import Avatar_img_2 from '../images/Avatar.jpg'
import Avatar from '@mui/material/Avatar';
import CommentsAvatars from './CommentsAvatars'
import '../styles/CommentsForm.css'

async function axios_savecomment(data) {
    let resp = axios.post('http://localhost:3000/api/saveComment', { data }, {
        headers: {
            'content-type': 'application/json',
        },
    })
    return resp;
}
const CommentsForm = () => {

    const [avatar_2, setAvatar] = useState(Avatar_img_2)
    const [boolSpinner, setBoolSpinner] = useState(false);
    const [spinnerLoading, setSpinner] = useState("Save comment")
    const [alertarray, setAlertarray] = useState({ bool: false, msg: '' });
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data);
        setBoolSpinner(true);
        setSpinner("Saving comment...");
        let resp = await axios_savecomment(data);
        if (resp.status === 200 && resp.status === 200) {
            setBoolSpinner(false);
            setSpinner("Save comment");
            let obj = {
                bool: true,
                msg: 'comment save it! Thanks a lot'
            }
            setAlertarray(obj)
            setTimeout(() => {
                let obj = {
                    bool: false,
                    msg: ''
                }
                setAlertarray(obj)
            }, 2000);
            reset();
        }
        else {
            setBoolSpinner(false);
            setSpinner("Save comment");
            let obj = {
                bool: true,
                msg: 'Sorry! Was an error trying to save the comment. Try again..'
            }
            setAlertarray(obj)
            setTimeout(() => {
                let obj = {
                    bool: false,
                    msg: ''
                }
                setAlertarray(obj)
            }, 2000);
        }
    };
    const onChange = async e => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setAvatar(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
    }


    return (
        <div className="container-comments">
            <Row className="header-row">
                <Col>
                    <Image src={Avatar_img} className="Avatar" />
                    <p>
                        Hi!! I'm <span className="font-weight-bold">Christopher Rivadeneyra</span>, If u
                        receibe this form thats means that I had the privilege
                        to work with u. <br /> I would like to have your comments about me and my work.
                    </p>
                </Col>
            </Row>
            <Container className="container-comments-child">
                <Card>
                    <Card.Body>
                        {
                            alertarray.bool
                                ?
                                <Alert variant="success">
                                    <Alert.Heading className="alert-title">{alertarray.msg}</Alert.Heading>
                                </Alert>
                                : null
                        }
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col md={2}>
                                    <Container>
                                        <Avatar
                                            alt="Avatar"
                                            src={avatar_2}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </Container>
                                    <Form.Group className="mb-3" controlId="formAvatar">

                                        <Form.Label>Change Avatar</Form.Label>
                                        <Form.Control className="file" type="file" {...register("Avatar", { required: true })} onChange={onChange}></Form.Control>
                                        {errors.Avatar?.type === 'required' && <span className="label-mandatory">Avatar is required</span>}

                                    </Form.Group>
                                </Col>
                                <Col md={10}>
                                    <CommentsAvatars />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formNombre">

                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Type your name.." {...register("Name", { required: true })} />
                                {errors.Name?.type === 'required' && <span className="label-mandatory">Name is required</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formJobTitle">
                                <Form.Label>Your Job Title</Form.Label>
                                <Form.Control type="text" placeholder="Type your job title..." {...register("JobTitle", { required: true })} />
                                {errors.JobTitle?.type === 'required' && <span className="label-mandatory">Job Title is required</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCompany">
                                <Form.Label>Where do u work?</Form.Label>
                                <Form.Control type="text" placeholder="Type the company.." {...register("Company", { required: true })} />
                                {errors.Company?.type === 'required' && <span className="label-mandatory">Company is required</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formComment">
                                <Form.Label>What do u think about me and my job?</Form.Label>
                                <Form.Control as="textarea" rows={5} maxLength="500" placeholder="Type your opinion..."  {...register("Comment", { required: true })} />
                                {errors.Company?.type === 'required' && <span className="label-mandatory">Opinion is required</span>}
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 section-button-save">
                                <Button className="button-save" variant="primary" type="submit" disabled={!spinnerLoading}>
                                    {
                                        boolSpinner ?
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            :
                                            null

                                    }
                                    <label
                                        className="Spinner-save">{spinnerLoading}</label>
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CommentsForm;