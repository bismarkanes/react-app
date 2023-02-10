import React from 'react';
import { ResponsiveGrid, } from 'components/responsive-grid';
import ContainerRowFlex from 'components/base/containerrowflex';
import { Normal, } from 'components/base/P';

const MyGrid = ResponsiveGrid(2, 4, 8, 8, 0);

const Container = () => {
  return (
    <ContainerRowFlex align="flex-start" wrap="wrap">
      <MyGrid>
        <Normal>
          To nunc eleifend leo vitae magna.  Nulla posuere.  Donec posuere augue in quam.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.
        </Normal>
      </MyGrid>
      <MyGrid>
        <Normal>
          Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor.
        </Normal>
      </MyGrid>

      <MyGrid>3</MyGrid>
      <MyGrid>4</MyGrid>

      <MyGrid>5</MyGrid>
      <MyGrid>6</MyGrid>

      <MyGrid>7</MyGrid>
      <MyGrid>8</MyGrid>
      <MyGrid>9</MyGrid>
      <MyGrid>10</MyGrid>
      <MyGrid>11</MyGrid>
      <MyGrid>12</MyGrid>
    </ContainerRowFlex>
  );
};

export default Container;
