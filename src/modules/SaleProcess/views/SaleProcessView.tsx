"use client"; // This is a client component
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import ExternalIcon from "@hedpay/assets/icons/external-link.svg";
import PDFIcon from "@hedpay/assets/icons/pdf.png";

import CapBar from "../components/CapBar/CapBarComponent";
import Timer from "../components/Timer/TimerComponent";

import styles from "./styles.module.scss";

type Props = {
  cap: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SaleProcessView = ({ cap, days, hours, minutes, seconds }: Props) => {
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const circleRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const landingView = document.getElementById("landingView");
    if (!landingView) return;
    landingView.onmousemove = (ev: MouseEvent) => {
      if (!circleRef1 || !circleRef1.current) return;
      if (!circleRef2 || !circleRef2.current) return;
      if (!circleRef3 || !circleRef3.current) return;

      const x = ev.clientX / window.innerWidth;
      const y = ev.clientY / window.innerHeight;

      circleRef1.current.style.transform = `translate(calc(40% + ${
        x * 70
      }px), calc(10% + ${y * 50}px))`;
      circleRef2.current.style.transform = `translate(calc(10% - ${x * 70}px), -${
        y * 50
      }px)`;
      circleRef3.current.style.transform = `translate(calc(50% - ${
        x * 20
      }px), calc(10% - ${(x + y) * 80}px))`;
    };
  }, []);

  const toWhitepaper = () => {
    window.open("https://hedpay.com", "_blank");
  };

  const toContract = () => {
    window.open(
      "https://testnet.bscscan.com/address/0x229CA39fAD4D7cb907fa26baF753Fd23aE85a799",
      "_blank"
    );
  };

  return (
    <div>
      <div className={styles.saleProcessRoot}>
        <h2>Seed Sale</h2>
        <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        <div className={styles.downloadButtonGroup}>
          <div className={styles.downloadButton} onClick={toWhitepaper}>
            WhitePaper
            <Image src={PDFIcon} alt="whitepaper" />
          </div>
          <div className={styles.downloadButton} onClick={toContract}>
            Contract
            <Image src={ExternalIcon} alt="external to contract" />
          </div>
        </div>
        <CapBar cap={cap} />
        <div className={styles.decoration}>
          <div className={styles.circle1} ref={circleRef1}></div>
          <div className={styles.circle2} ref={circleRef2}></div>
          <div className={styles.circle3} ref={circleRef3}></div>
        </div>
      </div>
    </div>
  );
};

export default SaleProcessView;
