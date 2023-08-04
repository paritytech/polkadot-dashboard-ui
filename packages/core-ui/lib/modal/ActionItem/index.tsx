/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionItemProps } from "../types";
import { useEffect, useState } from "react";
import "./index.scss";

/**
 * @name ActionItem
 * @summary A call to action item as a header.
 * @param {string} text - The text to display.
 */
export const ActionItem = ({
  style,
  text,
  toggled,
  disabled,
  onToggle,
  inactive = false,
  inlineButton,
}: ActionItemProps) => {
  const [toggle, setToggle] = useState<boolean>(toggled);

  useEffect(() => setToggle(toggled), [toggled]);
  return (
    <h3
      className={`modal-action-item`}
      style={{ ...style, opacity: inactive ? "var(--opacity-disabled)" : 1 }}
    >
      {toggled === undefined ? (
        <FontAwesomeIcon icon={faChevronRight} transform="shrink-6" />
      ) : (
        <button
          type="button"
          className="toggle"
          disabled={disabled}
          onClick={() => {
            if (typeof onToggle === "function") {
              onToggle(!toggle);
            }
            setToggle(!toggle);
          }}
        >
          {toggle && <FontAwesomeIcon icon={faCheck} transform="shrink-3" />}
        </button>
      )}
      {text}
      {inlineButton && <span>{inlineButton}</span>}
    </h3>
  );
};
