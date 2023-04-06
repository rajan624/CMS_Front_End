/** Flexbox styles */

export const flexBetween = {
  display: "flex",
  justifyContent: "space-between",
};

export const flexBetweenWithItemsCenter = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const flexBetweenCenter = {
  display: "flex",
  justifyContent: { xs: "center", md: "space-between" },
  alignItems: "center",
};

export const flexCenter = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const justifyCenter = { display: "flex", justifyContent: "center" };
export const itemsCenter = { display: "flex", alignItems: "center" };

export const dFlex = {
  display: "flex",
  flexDirection: "row",
};

export const fixedBottom = {
  position: "absolute",
  bottom: 100,
  width: "100%",
};

export const displayOnDesktop = { display: { xs: "none", md: "block" } };
export const displayOnMobile = { display: { xs: "block", md: "none" } };
export const responsiveFlexDirection = { flexDirection: { xs: "column", md: "row" } };
export const responsiveWidth = { width: { xs: "100%", md: "50%" } };
