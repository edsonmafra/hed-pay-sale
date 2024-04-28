import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Web3 from "web3";

import erc20ABI from "@hedpay/constants/erc20ABI.json";
import contractABI from "@hedpay/constants/hdpSaleABI.json";
import { Web3Context } from "@hedpay/contexts/Web3";
import { divDecimals, mulDecimals } from "@hedpay/utils";

export const useHdpSaleContract = () => {
  const { isConnected, account, web3: web3WithConnet, connect } = useContext(Web3Context);

  const [hdpAmount, setHdpAmount] = useState<number>(0);
  const [hdpAmountWithDecimal, setHdpAmountWithDecimal] = useState<string>("0");
  const [priceDecimals, setPriceDecimals] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [maxBuyAmount, setMaxBuyAmount] = useState<string>("0");
  const [stableCoin, setStableCoin] = useState<string>();
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);
  const [discountedPercentage, setDiscountedPercentage] = useState<number>(0);
  const [hdpSoldOut, setHdpSoldOut] = useState<number>(0);

  const web3 = useMemo(
    () =>
      new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_RPC_URL || "")),
    []
  );

  const contract = useMemo(
    () =>
      new web3.eth.Contract(
        contractABI as any[],
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
      ),
    [web3]
  );

  const getHdpAmount = useCallback(
    async (stableAmount: number) => {
      try {
        await contract.methods["getHdpAmount"](mulDecimals(stableAmount, 18))
          .call({
            from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
          })
          .then((amount: string) => {
            setHdpAmount(divDecimals(amount, 18));
            setHdpAmountWithDecimal(amount);
          });
      } catch (e) {
        console.log(e);
      }
    },
    [contract]
  );

  const initialize = useCallback(async () => {
    try {
      await contract.methods["getPriceDecimal"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then(async (priceDecimalStr: string) => {
          setPriceDecimals(Number(priceDecimalStr));

          await contract.methods["getPrice"]()
            .call({
              from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
            })
            .then((priceStr: string) => {
              setPrice(divDecimals(priceStr, Number(priceDecimalStr)));
            });
        });

      await contract.methods["getMaxBuyAmount"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((maxBuyAmountStr: string) => {
          setMaxBuyAmount(maxBuyAmountStr);
        });

      await contract.methods["getStableToken"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((value: string) => {
          setStableCoin(value);
        });

      await contract.methods["g_soldOut"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((hdpSoldOutStr: string) => {
          setHdpSoldOut(divDecimals(hdpSoldOutStr, 18));
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const getPrice = useCallback(async () => {
    try {
      await contract.methods["getPrice"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((priceStr: string) => {
          setPrice(divDecimals(priceStr, priceDecimals));
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract, priceDecimals]);

  const getPriceDecimal = useCallback(async () => {
    try {
      await contract.methods["getPriceDecimal"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then(async (priceDecimalStr: string) => {
          setPriceDecimals(Number(priceDecimalStr));
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract]);

  const getMaxBuyAmount = useCallback(async () => {
    try {
      await contract.methods["getMaxBuyAmount"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((maxBuyAmountStr: string) => {
          setMaxBuyAmount(maxBuyAmountStr);
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract]);

  const getStableToken = useCallback(async () => {
    try {
      await contract.methods["getStableToken"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((value: string) => {
          setStableCoin(value);
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract]);

  const getDiscountedPrice = useCallback(
    async (stableAmount: number) => {
      try {
        await contract.methods["getDiscountedPrice"](mulDecimals(stableAmount, 18))
          .call({
            from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
          })
          .then((discountedPriceStr: string) => {
            setDiscountedPrice(divDecimals(discountedPriceStr, priceDecimals));
          });
      } catch (e) {
        console.log(e);
      }
    },
    [contract, priceDecimals]
  );

  const getDiscountPercentage = useCallback(
    async (stableAmount: number) => {
      try {
        await contract.methods["getDiscountPercentage"](mulDecimals(stableAmount, 18))
          .call({
            from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
          })
          .then((discountedPercentageStr: string) => {
            setDiscountedPercentage(divDecimals(discountedPercentageStr, priceDecimals));
          });
      } catch (e) {
        console.log(e);
      }
    },
    [contract, priceDecimals]
  );

  const getSoldOut = useCallback(async () => {
    try {
      await contract.methods["g_soldOut"]()
        .call({
          from: process.env.NEXT_PUBLIC_WALLET_ADDRESS
        })
        .then((hdpSoldOutStr: string) => {
          setHdpSoldOut(divDecimals(hdpSoldOutStr, 18));
        });
    } catch (e) {
      console.log(e);
    }
  }, [contract]);

  const approve = useCallback(
    async (toAddress: string, stableAmount: number) => {
      if (!isConnected || !account || !web3WithConnet || !stableCoin) return;

      const stableContract = new web3WithConnet.eth.Contract(
        erc20ABI as any[],
        stableCoin
      );

      const saleContract = new web3WithConnet.eth.Contract(
        contractABI as any[],
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
      );

      const stableAmountStr = mulDecimals(stableAmount, 18);
      return await stableContract.methods["approve"](toAddress, stableAmountStr).send({
        from: account
      });
    },
    [isConnected, web3WithConnet, account, stableCoin]
  );

  const buy = useCallback(
    async (toAddress: string, stableAmount: number) => {
      if (!isConnected || !account || !web3WithConnet || !stableCoin) return;

      const stableContract = new web3WithConnet.eth.Contract(
        erc20ABI as any[],
        stableCoin
      );

      const saleContract = new web3WithConnet.eth.Contract(
        contractABI as any[],
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""
      );

      const stableAmountStr = mulDecimals(stableAmount, 18);
      return await saleContract.methods["buy"](toAddress, stableAmountStr).send({
        from: account
      });
    },
    [isConnected, web3WithConnet, account, stableCoin]
  );

  return {
    hdpAmount,
    hdpAmountWithDecimal,
    priceDecimals,
    price,
    maxBuyAmount,
    stableCoin,
    discountedPrice,
    discountedPercentage,
    hdpSoldOut,
    getHdpAmount,
    getPrice,
    getPriceDecimal,
    getMaxBuyAmount,
    getStableToken,
    getDiscountedPrice,
    getDiscountPercentage,
    getSoldOut,
    buy,
    approve,
    isConnected,
    account,
    connect
  };
};
