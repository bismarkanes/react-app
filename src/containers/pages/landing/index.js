import React from 'react';
import { useDispatch, } from 'react-redux';
import { progressStartAction as progressStart, progressEndAction as progressEnd } from 'redux/actions/globalAction';
import Button from 'components/base/button';
import ContainerRowFlex from 'components/base/containerrowflex';
import SampleGrid from 'containers/samples-grid';

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <SampleGrid/>
      <ContainerRowFlex height="100px" backgroundColor="green" justify="center">
        <Button onClick={() => {
          dispatch(progressStart());
          setTimeout(() => {
            dispatch(progressEnd());
          }, 1000);
        }}>Hit me!</Button>
      </ContainerRowFlex>
    </React.Fragment>
  );
};


export default Landing;
