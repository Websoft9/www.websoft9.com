import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useFormUrl } from "@hooks";
import { FormGroup, Input, Select } from "@ui/form-elements";
import { hasKey } from "@utils";
import Button from "@ui/button";

const AppointmentForm = () => {
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
        console.log(data);
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
        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup mb="20px">
                <Input
                    id="appointment_name"
                    type="text"
                    placeholder="Name *"
                    feedbackText={errors?.appointment_name?.message}
                    state={
                        hasKey(errors, "appointment_name") ? "error" : "success"
                    }
                    showState={!!hasKey(errors, "appointment_name")}
                    hover={2}
                    {...register("appointment_name", {
                        required: "Name is required",
                    })}
                />
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    id="appointment_email"
                    type="email"
                    placeholder="Email *"
                    feedbackText={errors?.appointment_email?.message}
                    state={
                        hasKey(errors, "appointment_email")
                            ? "error"
                            : "success"
                    }
                    showState={!!hasKey(errors, "appointment_email")}
                    hover={2}
                    {...register("appointment_email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
            </FormGroup>
            <FormGroup mb="20px">
                <Select
                    id="appointment_inquiry"
                    feedbackText={errors?.appointment_inquiry?.message}
                    state={
                        hasKey(errors, "appointment_inquiry")
                            ? "error"
                            : "success"
                    }
                    showState={!!hasKey(errors, "appointment_inquiry")}
                    hover={2}
                    {...register("appointment_inquiry", {
                        required: "Please select a inquiry",
                    })}
                >
                    <option value="">Your inquiry about</option>
                    <option value="General Information Request">
                        General Information Request
                    </option>
                    <option value="Partner Relations">Partner Relations</option>
                    <option value="Careers">Careers</option>
                    <option value="Software Licencing">
                        Software Licencing
                    </option>
                </Select>
            </FormGroup>
            <FormGroup mb="0px" textAlign="center">
                <Button
                    type="submit"
                    px="54px"
                    disabled={serverState.submitting}
                >
                    Submit
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
            </FormGroup>
        </form>
    );
};

export default AppointmentForm;
