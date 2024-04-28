"use client"; // This is a client component
import React, { memo, useCallback, useContext, useEffect, useState } from "react";

import { ModalContext } from "@hedpay/contexts/Modal";
import { compareBigNumbers, isValidAddress } from "@hedpay/utils";

import { useDiscountInfoCommand } from "../commands/useDiscountInfoCommand";
import PurchaseView from "../views/PurchaseView";

export const PurchaseContainer: React.FC = memo(() => {
  const {
    price,
    discountedPrice,
    discountedPercentage,
    hdpAmount,
    hdpAmountWithDecimal,
    maxBuyAmount,
    isConnected,
    getHdpAmount,
    getDiscountPercentage,
    getDiscountedPrice
  } = useDiscountInfoCommand();
  const [toAddress, setToAddress] = useState<string>("");
  const [usdtAmount, setUsdtAmount] = useState<number>(0);
  const [isLoading, toggleLoading] = useState<boolean>(false);
  const { open } = useContext(ModalContext);

  const getDetails = useCallback(async () => {
    await Promise.all([
      getHdpAmount(usdtAmount),
      getDiscountPercentage(usdtAmount),
      getDiscountedPrice(usdtAmount)
    ]);
    toggleLoading(false);
  }, [getHdpAmount, getDiscountPercentage, getDiscountedPrice, usdtAmount]);

  useEffect(() => {
    if (isLoading) return;
    toggleLoading(true);
    getDetails();
  }, [isLoading, getDetails]);

  const handlePurchaseClick = useCallback(() => {
    // buy(toAddress, usdtAmount);
    open(toAddress, usdtAmount);
  }, [toAddress, usdtAmount, open]);

  const isValidAmount = useCallback(() => {
    return usdtAmount > 0 && compareBigNumbers(hdpAmountWithDecimal, maxBuyAmount) < 1;
  }, [usdtAmount, hdpAmountWithDecimal, maxBuyAmount]);

  return (
    <PurchaseView
      toAddress={toAddress}
      setToAddress={setToAddress}
      usdtAmount={usdtAmount}
      setUsdtAmount={setUsdtAmount}
      usdValue={price}
      discountUsdValue={discountedPrice}
      discountPercentage={discountedPercentage}
      totalSum={usdtAmount}
      hdpAmount={hdpAmount}
      deliveryDate={new Date()}
      onPurchaseClick={handlePurchaseClick}
      disabledBuyButton={!isConnected || !isValidAddress(toAddress) || !isValidAmount()}
      warnedUsdtInput={compareBigNumbers(hdpAmountWithDecimal, maxBuyAmount) === 1}
      warnedAddressInput={toAddress !== "" && !isValidAddress(toAddress)}
    />
  );
});

PurchaseContainer.displayName = "PurchaseContainer";
