import { Container } from "@ui/wrapper";
import React, { useState } from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; // 引入样式
import { SectionWrap } from "./style";

const IframeArea = ({ data, width, height }) => {
    const [isLoading, setIsLoading] = useState(true);

    const hideLoader = () => {
        // Set a timeout to delay the removal of the loader,
        // giving the iframe more time to load.
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the delay as needed
    };

    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',

    };

    return (
        <SectionWrap>
            <Container style={isLoading ? loaderStyle : {}}>
                {isLoading && (
                    <div>
                        <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                        <p style={{ marginTop: '20px' }}>loading...</p> {/* Loading text */}
                    </div>
                )}
                <iframe
                    src={data}
                    width={width}
                    height={height}
                    frameBorder="0"
                    onLoad={hideLoader}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
                {/* <iframe src={data} width={width} height={height}></iframe> */}
            </Container>
        </SectionWrap>
    );
};

export default IframeArea;
