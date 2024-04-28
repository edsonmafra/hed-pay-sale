import { DiscountContainer } from "@hedpay/modules/DiscountList/containers/DiscountContainer";
import { LandingHeaderContainer } from "@hedpay/modules/LandingHeader/containers/LandingHeaderContainer";
import { MainHeaderContainer } from "@hedpay/modules/MainHeader/containers/MainHeaderContainer";
import { PurchaseContainer } from "@hedpay/modules/Purchase/containers/PurchaseContainer";
import { QuartersContainer } from "@hedpay/modules/QuartersCarousel/containers/QuartersContainer";

import styles from "./page.module.scss";

export default function DashboardPage() {
  return (
    <div>
      <MainHeaderContainer />
      <div className={styles.dashboardRoot}>
        <LandingHeaderContainer />
        <div className={styles.buyBoard}>
          <PurchaseContainer />
          <DiscountContainer />
        </div>
        <QuartersContainer />
      </div>
    </div>
  );
}
