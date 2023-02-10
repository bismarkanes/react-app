import styled from 'styled-components';
import { genericDevice } from 'components/devicesize';
import ContainerRowFlex from 'components/base/containerrowflex';

export const DefaultResponsiveGrid = () => {
  return ResponsiveGrid(2, 4, 10, 12, 0);
};

export const ResponsiveGrid = (mobileGrid, tabletGrid, laptopGrid, desktopGrid, flexGrow = 0) => {
  const Grids = {
    gridMobile: `${(100 / mobileGrid)}%`,
    gridTablet: `${(100 / tabletGrid)}%`,
    gridLaptop: `${(100 / laptopGrid)}%`,
    gridDesktop: `${(100 / desktopGrid)}%`,
  };

  return styled(ContainerRowFlex).attrs((props) => ({
    align: 'flex-start'
  }))`
  @media all and ${genericDevice.mobile} {
    flex: 0 ${Grids.gridMobile};
    flex-grow: ${flexGrow};
  }

  @media all and ${genericDevice.tablet} {
    flex: 1 ${Grids.gridTablet};
    flex-grow: ${flexGrow};
  }

  @media all and ${genericDevice.laptop} {
    flex: 1 ${Grids.gridLaptop};
    flex-grow: ${flexGrow};
  }

  @media all and ${genericDevice.desktop} {
    flex: 1 ${Grids.gridDesktop};
    flex-grow: ${flexGrow};
  }
`;
};
