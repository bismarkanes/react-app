const mobileMinSize = '280px';
const tabletMinSize = '768px';
const laptopMinSize = '1366px';
const desktopMinSize = '1920px';

export const genericDevice = {
  mobile: `(min-width: ${mobileMinSize})`,
  tablet: `(min-width: ${tabletMinSize})`,
  laptop: `(min-width: ${laptopMinSize})`,
  desktop: `(min-width: ${desktopMinSize})`,
};
