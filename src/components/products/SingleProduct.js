import { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products/index"
import { Stack, Tooltip } from "@mui/material";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({ product, matches, addProductToCart }) {
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const [setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    // setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductFavButton isfav={0}>
            </ProductFavButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip style={{margin: "100px"}} placement="right" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductDetailDialog product={product} addProductToCart={addProductToCart} />
    </>
  );
}