import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  borderRadius: "0.5rem",
  fontSize: "0",
};

function ImageModal({ imageUrl, imageAlt, buttonText }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {buttonText !== "" ? buttonText : "Click"}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{ width: "100%", borderRadius: "0.5rem" }}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default ImageModal;
