// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Any } from "../../../../utils/types";
import { Dispatch, SetStateAction } from "react";

export interface ConnectConfigContextInterface {
  dappName: string;
  network: string;
  ss58: number;
  setNetwork: Dispatch<SetStateAction<string>>;
  wallets: { hardwareActive: boolean; webActive: boolean; devActive: boolean };
}

export interface DappInfo {
  dappName: string;
  network: string;
  ss58: number;
  activeAccount: Any;
  setActiveAccount: Any;
}

export interface ConnectType {
  hardwareActive?: boolean;
  webActive?: boolean;
  devActive?: boolean;
}
