import React from "react";
import PropTypes from "prop-types";
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group";

const timeout = 500;
const getTransitionStyles = {
    entering: {
        position: "absolute",
        opacity: 0,
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0,
    },
};

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props;
        if (location) {
            return (
                <TransitionGroup>
                    <ReactTransition
                        key={location.pathname}
                        timeout={{
                            enter: timeout,
                            exit: timeout,
                        }}
                    >
                        {(status) => (
                            <div
                                style={{
                                    ...getTransitionStyles[status],
                                }}
                            >
                                {children}
                            </div>
                        )}
                    </ReactTransition>
                </TransitionGroup>
            );
        } else {
            return "Loading...";
        }
    }
}

Transition.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

export default Transition;
