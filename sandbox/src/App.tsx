/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Buttons } from "./pages/Buttons";
import { SideMenu } from "./components/SideMenu";
import { Statistics } from "./pages/Statistics";
import { Odometer } from "./pages/Odometer";
import { Modal } from "./pages/Modal";
import { GridPage } from "./pages/GridPage";
import { CardPage } from "./pages/CardPage";

export const App = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  const getComponent = (key: string) => {
    switch (key) {
      case "statistics": {
        return <Statistics />;
      }
      case "odometer":
        return <Odometer />;
      case "modal":
        return <Modal />;
      case "grid":
        return <GridPage />;
      case "card":
        return <CardPage />;
      default:
        return <Buttons />;
    }
  };

  return (
    <>
      <main className={`theme-${network}-relay theme-${theme}`}>
        <SideMenu
          theme={theme}
          setTheme={setTheme}
          network={network}
          setNetwork={setNetwork}
          component={component}
          setComponent={setComponent}
        />
        <div className="body">{getComponent(component)}</div>
      </main>
    </>
  );
};
