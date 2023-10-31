// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import type { ConnectConfigContextInterface } from "./types";

export const defaultConnectConfigContext: ConnectConfigContextInterface = {
  dappName: "",
  network: "polkadot",
  ss58: 0,
  setNetwork: (network: string): void => {},
  wallets: {
    hardwareActive: true,
    webActive: true,
    devActive: true,
  },
};
