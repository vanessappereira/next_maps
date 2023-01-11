import { createContext, useReducer } from "react";

export const ReportContext = createContext();

export const reportReducer = (state, action) => {
  switch (action.type) {
    case "SET_REPORTS":
      return {
        reports: action.payload,
      };
    case "CREATE_REPORT":
      return {
        reports: [action.payload, ...state.reports],
      };
    case "DELETE_REPORT":
      return {
        reports: state.reports.filter((r) => r._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ReportContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reportReducer, {
    reports: null,
  });

  return (
    <ReportContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ReportContext.Provider>
  );
};
