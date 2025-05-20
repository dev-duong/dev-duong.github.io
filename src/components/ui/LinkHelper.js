// src/utils/linkHelpers.js
export const getDefaultLabel = (type) => {
  return (
    {
      github: "View GitHub Repo →",
      pdf: "View PDF →",
      video: "Watch Video →",
    }[type] || "View Link →"
  );
};
