import { useHdpSaleContract } from "@hedpay/hooks/useHdpSaleContract";

export const useDiscountInfoCommand = () => {
  const {
    price,
    discountedPercentage,
    discountedPrice,
    hdpAmount,
    hdpAmountWithDecimal,
    maxBuyAmount,
    getHdpAmount,
    getDiscountPercentage,
    getDiscountedPrice,
    isConnected
  } = useHdpSaleContract();

  return {
    price,
    discountedPercentage,
    discountedPrice,
    hdpAmount,
    hdpAmountWithDecimal,
    maxBuyAmount,
    getHdpAmount,
    getDiscountPercentage,
    getDiscountedPrice,
    isConnected
  };
};
