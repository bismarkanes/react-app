import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { genericDevice } from 'components/devicesize';
import { ContainerRowFlex } from 'container-base';

const StyledGrid = styled(ContainerRowFlex).attrs((props) => ({
  align: 'flex-start'
}))`
  @media all and ${genericDevice.smallest} {
    flex: 0 ${props => props.Grids.gridMobile}};
  }

  @media all and ${genericDevice.mobile} {
    flex: 0 ${props => props.Grids.gridMobile}};
  }

  @media all and ${genericDevice.tablet} {
    flex: 1 ${props => props.Grids.gridTablet};
  }

  @media all and ${genericDevice.laptop} {
    flex: 1 ${props => props.Grids.gridLaptop};
  }

  @media all and ${genericDevice.desktop} {
    flex: 1 ${props => props.Grids.gridDesktop};
  }
`;

export const ResponsiveGrid = (props) => {
  return (
    <StyledGrid Grids={{
      gridMobile: `${(100 / props.mobileGrid)}%`,
      gridTablet: `${(100 / props.tabletGrid)}%`,
      gridLaptop: `${(100 / props.laptopGrid)}%`,
      gridDesktop: `${(100 / props.desktopGrid)}%`,
    }} {...props}>
    </StyledGrid>
  );
};

ResponsiveGrid.propTypes = {
  mobileGrid: PropTypes.string,
  tabletGrid: PropTypes.string,
  laptopGrid: PropTypes.string,
  desktopGrid: PropTypes.string,
};

ResponsiveGrid.defaultProps = {
  mobileGrid: '2',
  tabletGrid: '4',
  laptopGrid: '6',
  desktopGrid: '8',
};
