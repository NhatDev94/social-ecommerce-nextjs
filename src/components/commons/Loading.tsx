import { Backdrop, CircularProgress } from "@mui/material";
type Props = {
  open: boolean;
};
export default function Loading({ open }: Props) {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      //   onClick={onClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
