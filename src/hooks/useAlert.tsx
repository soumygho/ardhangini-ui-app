import { useState } from "react";

export const useAlert = () => {
  const [shouldShowAlert, setShouldShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [severity, setSeverity] = useState<"success" | "info" | "warning" | "error">("info");
  const showAlert = (
    content: string,
    severity: "success" | "info" | "warning" | "error"
  ) => {
    setShouldShowAlert(() => true);
    setAlertContent(() => content);
    setSeverity(() => severity);
  };
  const hideAlert = () => {
    setShouldShowAlert(() => false);
    setAlertContent(() => "");
    setSeverity(() => "info");
  };
  return { shouldShowAlert, alertContent, severity, showAlert, hideAlert };
};
