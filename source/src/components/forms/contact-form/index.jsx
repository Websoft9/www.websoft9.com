import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Row, Col } from "@ui/wrapper";
import { useFormUrl } from "@hooks";
import { hasKey } from "@utils";
import { FormGroup, Input, Textarea } from "@ui/form-elements";
import Button from "@ui/button";

const ContactForm = () => {
    const formUrl = useFormUrl();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: formUrl,
            data: data,
        })
            .then((r) => {
                handleServerResponse(true, "Thanks! for contact with us", form);
            })
            .catch((r) => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{ lg: 20 }}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            id="name"
                            placeholder="Name *"
                            feedbackText={errors?.name?.message}
                            state={hasKey(errors, "name") ? "error" : "success"}
                            showState={!!hasKey(errors, "name")}
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email *"
                            feedbackText={errors?.email?.message}
                            state={
                                hasKey(errors, "email") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "email")}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            id="subject"
                            placeholder="Subject *"
                            feedbackText={errors?.subject?.message}
                            state={
                                hasKey(errors, "subject") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "subject")}
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea
                            id="message"
                            placeholder="Please describe what you need. *"
                            feedbackText={errors?.message?.message}
                            state={
                                hasKey(errors, "message") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "message")}
                            {...register("message", {
                                required: "Message is required",
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length is 50",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Minimum length is 10",
                                },
                            })}
                        ></Textarea>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit" disabled={serverState.submitting}>
                        Send Message
                    </Button>
                    {serverState.status && (
                        <p
                            className={`form-output ${
                                !serverState.status.ok ? "errorMsg" : "success"
                            }`}
                        >
                            {serverState.status.msg}
                        </p>
                    )}
                </Col>
            </Row>
        </form>
    );
};

export default ContactForm;
