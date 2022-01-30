import React from 'react';
import Loader from 'react-loader-spinner';
import './LoaderComp.scss';

const LoaderComp = () => {
  return (
    <div className="loader-comp">
      <Loader type="Oval" color="tan" height={100} width={100} />
    </div>
  );
};
export default LoaderComp;
