import { Box, Button, Toast, ToastProps } from "@ignite-ui-ds/react";
import { useState } from "react";

export function ToastButton({...props}: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Button onClick={() => setOpen(!open)}>Click</Button>

      <Toast open={open} {...props} />
    </Box>
  )
}