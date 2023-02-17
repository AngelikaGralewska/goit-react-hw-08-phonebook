import React from 'react';
import PropTypes from 'prop-types';
import { Triangle } from "react-loader-spinner";

export const Loader = isLoading => {
    return (
        <Triangle
        height="60"
        width="60"
        color="#BB2649"
        ariaLabel="triangle-loading"
        wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
        }}
        //wrapperClassName=""
        visible={Boolean(isLoading)}
        />
    );
};

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };