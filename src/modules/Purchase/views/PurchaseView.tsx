import React, { memo } from "react";
import PropTypes from "prop-types";

import BuyButton from "@hedpay/components/BuyButton/BuyButtonComponent";
import TextField from "@hedpay/components/TextField/TextFieldComponent";
import Wrapper from "@hedpay/components/Wrapper/WrapperComponent";

import styles from "./styles.module.scss";

type Props = {
  toAddress: string;
  setToAddress: (_: string) => void;
  usdtAmount: number;
  setUsdtAmount: (_: number) => void;
  usdValue: number;
  discountUsdValue: number;
  discountPercentage: number;
  totalSum: number;
  hdpAmount: number;
  deliveryDate: Date;
  onPurchaseClick: () => void;
  disabledBuyButton: boolean;
  warnedUsdtInput: boolean;
  warnedAddressInput: boolean;
};

const PurchaseView: React.FC<Props> = memo<Props>(
  ({
    toAddress,
    setToAddress,
    usdtAmount,
    setUsdtAmount,
    usdValue,
    discountUsdValue,
    totalSum,
    hdpAmount,
    deliveryDate,
    onPurchaseClick,
    discountPercentage,
    disabledBuyButton,
    warnedUsdtInput,
    warnedAddressInput
  }) => (
    <section className={styles.purchaseViewRoot}>
      <p>Specified Phase :</p>
      <div>
        <label>Choose a payment method</label>
        <div className={styles.tabButton}>
          <p>USDT</p>
        </div>
      </div>
      <div className={styles.hdpToUsdt}>1 HDP-B = {usdValue} USDT</div>
      <div>
        <label>Wallet Address</label>
        <TextField
          value={toAddress}
          setValue={setToAddress}
          placeholder="Address"
          warned={warnedAddressInput}
        />
      </div>
      <div className={styles.usdtAmountRow}>
        <div>
          <label>Amount USDT</label>
          <TextField
            value={usdtAmount.toString()}
            setValue={setUsdtAmount}
            placeholder="Amount"
            warned={warnedUsdtInput}
            number
          />
        </div>
        <div>
          <div>
            <label className={styles.smallLabel}>Discount %</label>
            <TextField value={`${discountPercentage} %`} />
          </div>
          <div>
            <label className={styles.smallLabel}>Discount USD Value</label>
            <TextField value={`$ ${discountUsdValue}`} />
          </div>
        </div>
      </div>
      <div>
        <label>Total sum</label>
        <div className={styles.totalSum}>{`$ ${totalSum}`}</div>
      </div>
      <div className={styles.resultRow}>
        <div>
          <label className={styles.smallLabel}>HDP-B amount</label>
          <Wrapper>{`${hdpAmount.toLocaleString()} HDP-B`}</Wrapper>
        </div>
        <div>
          <label className={styles.smallLabel}>Delivery date</label>
          <Wrapper>{deliveryDate.toDateString()}</Wrapper>
        </div>
      </div>
      <BuyButton onClick={() => onPurchaseClick()} disabled={disabledBuyButton} />
    </section>
  )
);

PurchaseView.propTypes = {
  toAddress: PropTypes.string.isRequired,
  setToAddress: PropTypes.func.isRequired,
  usdtAmount: PropTypes.number.isRequired,
  setUsdtAmount: PropTypes.func.isRequired,
  usdValue: PropTypes.number.isRequired,
  discountUsdValue: PropTypes.number.isRequired,
  totalSum: PropTypes.number.isRequired,
  hdpAmount: PropTypes.number.isRequired,
  deliveryDate: PropTypes.oneOfType([PropTypes.instanceOf(Date)]).isRequired,
  onPurchaseClick: PropTypes.func.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  disabledBuyButton: PropTypes.bool.isRequired,
  warnedUsdtInput: PropTypes.bool.isRequired,
  warnedAddressInput: PropTypes.bool.isRequired
};

PurchaseView.displayName = "PurchaseView";

export default PurchaseView;
