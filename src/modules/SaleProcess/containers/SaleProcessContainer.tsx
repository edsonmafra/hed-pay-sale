import React, { useEffect, useState } from "react";

import { useHdpSaleContract } from "@hedpay/hooks/useHdpSaleContract";

import SaleProcessView from "../views/SaleProcessView";

export const SaleProcessContainer = () => {
  const { hdpSoldOut, getSoldOut } = useHdpSaleContract();
  const [remainSeconds, setRemainSeconds] = useState<number>(0);

  const div = (a: number, b: number) => {
    return (a - (a % b)) / b;
  };

  useEffect(() => {
    const interval = setInterval(async () => getSoldOut(), 10000);
    const interval1 = setInterval(
      async () =>
        setRemainSeconds(div(new Date("2023-7-1").getTime() - Date.now(), 1000)),
      1000
    );

    return () => clearInterval(interval);
  }, [getSoldOut]);

  return (
    <SaleProcessView
      cap={hdpSoldOut}
      days={div(remainSeconds, 86400)}
      hours={div(remainSeconds, 3600) % 24}
      minutes={div(remainSeconds, 60) % 60}
      seconds={remainSeconds % 60}
    />
  );
};
