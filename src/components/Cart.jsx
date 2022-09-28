import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CartProduct from "./CartProduct";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart({
  open,
  handleClickOpen,
  handleClose,
  cartProducts,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{cartProducts?.length} Products in the cart</DialogTitle>
        <DialogContent>
          <table className="cartTable">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {cartProducts?.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue Shop</Button>
          <Button onClick={handleClose}>Checkout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
