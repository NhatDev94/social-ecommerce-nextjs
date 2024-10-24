import { functionType } from "@/libs/types/function";
import { Alert, Snackbar } from "@mui/material";
type Severity = "success" | "info" | "warning" | "error";

type Props = {
  open: boolean;
  onClose: functionType;
  message: string;
  severity?: Severity;
  [key: string]: any;
};

export default function Message({
  open,
  onClose,
  message,
  severity = "success",
  ...props
}: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={props.autoHideDuration | 2000}
      onClose={onClose}
      {...props}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
