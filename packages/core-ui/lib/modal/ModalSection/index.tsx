/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "lib/utils";
import { ModalSectionProps } from "../types";
import "./index.scss";

/**
 * @name  ModalSection
 * @summary Section wrapper.
 */
export const ModalSection = ({ children, style, type }: ModalSectionProps) => (
  <div
    className={`${valEmpty(type === "carousel", "modal-carousel")}${valEmpty(
      type === "tab",
      "modal-tabs"
    )}`}
    style={style}
  >
    {children}
  </div>
);
