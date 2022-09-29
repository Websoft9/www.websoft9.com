import { useForm } from "react-hook-form";
import { Row, Col } from "@ui/wrapper";
import { FormGroup, Input, Select } from "@ui/form-elements";
import Button from "@ui/button";
import { hasKey } from "@utils";

const ConsultForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col lg={6}>
                    <FormGroup mb={20}>
                        <Input
                            id="con_email"
                            type="email"
                            placeholder="Email *"
                            feedbackText={errors?.con_email?.message}
                            state={
                                hasKey(errors, "con_email")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "con_email")}
                            {...register("con_email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb={20}>
                        <Select
                            id="visiting"
                            defaultValue=""
                            feedbackText={errors?.visiting?.message}
                            state={
                                hasKey(errors, "visiting") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "visiting")}
                            {...register("visiting", {
                                required: "Select a field",
                            })}
                        >
                            <option value="">Select Department to email</option>
                            <option value="Your inquiry about">
                                Your inquiry about
                            </option>
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
            </Row>
            <Button fullwidth type="submit">
                Get a free consultation
            </Button>
        </form>
    );
};

export default ConsultForm;
