import { useForm } from "react-hook-form";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { hasKey } from "@utils";
import { StyledBox, StyledInput } from "./style";

const NewsletterForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <StyledBox {...props}>
            <Heading as="h6" mb="30px">
                Don’t miss our monthly newsletters with the best analyses.
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledInput
                    id="news_email"
                    name="news_email"
                    type="email"
                    placeholder="Your e-mail"
                    feedbackText={errors?.news_email?.message}
                    state={hasKey(errors, "news_email") ? "error" : "success"}
                    showState={!!hasKey(errors, "news_email")}
                    {...register("news_email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
                <Button type="submit" fullwidth mb="15px">
                    Subscribe
                </Button>
                <p>Join 89.898 subscribers.</p>
            </form>
        </StyledBox>
    );
};

export default NewsletterForm;
