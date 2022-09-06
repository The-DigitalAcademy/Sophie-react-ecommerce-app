import { useState } from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products/index"
import { Stack, Tooltip} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton>
          {/* <FavoriteIcon /> */}
          <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            {/* <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton> */}
            {/* <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip  placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton> */}
          </Stack>
        </ProductActionsWrapper>
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductActionButton onClick={() => showProductDetailDialog()}>
          <Tooltip  placement="left" title="Full view">
            <FitScreenIcon color="primary" />
          </Tooltip>
        </ProductActionButton>
          // <ProductAddToCart style={{margin: "5px"}} show={showOptions} variant="contained">
          //    <Tooltip  placement="left" title="Full view">
          //       <FitScreenIcon color="primary" />
          //     </Tooltip>
          // </ProductAddToCart>
        )}
        
      </Product>
      <ProductMeta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}