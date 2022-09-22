import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useFormUrl } from "@hooks";
import { hasKey } from "@utils";
import { Row, Col } from "@ui/wrapper";
import { FormGroup, Input, Select, Textarea } from "@ui/form-elements";
import Button from "@ui/button";

const ConsultForm = () => {
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
                            id="consult_name"
                            type="text"
                            placeholder="Name *"
                            hover={2}
                            feedbackText={errors?.consult_name?.message}
                            state={
                                hasKey(errors, "consult_name")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "consult_name")}
                            {...register("consult_name", {
                                required: "Name is required",
                            })}
                        />
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            id="consult_email"
                            type="email"
                            placeholder="Email *"
                            hover={2}
                            feedbackText={errors?.consult_email?.message}
                            state={
                                hasKey(errors, "consult_email")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "consult_email")}
                            {...register("consult_email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </FormGroup>
                </Col>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Select
                            id="consult_inquiry"
                            hover={2}
                            feedbackText={errors?.consult_inquiry?.message}
                            state={
                                hasKey(errors, "consult_inquiry")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "consult_inquiry")}
                            {...register("consult_inquiry", {
                                required: "Please select a inquiry",
                            })}
                        >
                            <option value="">Your inquiry about</option>
                            <option value="General Information Request">
                                General Information Request
                            </option>
                            <option value="Partner Relations">
                                Partner Relations
                            </option>
                            <option value="Careers">Careers</option>
                            <option value="Software Licencing">
                                Software Licencing
                            </option>
                        </Select>
                    </FormGroup>
                </Col>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea
                            id="consult_message"
                            placeholder="Please describe what you need."
                            hover={2}
                            state={
                                hasKey(errors, "consult_message")
                                    ? "error"
                                    : "success"
                            }
                            feedbackText={errors?.consult_message?.message}
                            showState={!!hasKey(errors, "consult_message")}
                            {...register("consult_message", {
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
                <Col lg={12}>
                    <Button
                        type="submit"
                        disabled={serverState.submitting}
                        hoverStyle="two"
                        px="54px"
                    >
                        Get a free consultation
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

export default ConsultForm;
