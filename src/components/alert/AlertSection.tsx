import React from "react";
import Alert from "@mui/material/Alert";
interface AlertSectionProps {
  message: string;
  severity: "success" | "info" | "warning" | "error";
}
function AlertSection({ message, severity }: AlertSectionProps) {
  return (
    <Alert severity={severity}>
      {message}
    </Alert>
  );
}

export default AlertSection;
