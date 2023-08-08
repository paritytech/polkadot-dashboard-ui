/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import "./index.scss";
import { EntryProps } from "../types";

/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, theme }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${theme}`} style={style}>
    {children}
  </div>
);
