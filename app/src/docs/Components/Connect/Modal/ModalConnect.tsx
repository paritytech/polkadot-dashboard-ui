/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import { useOverlay } from "@packages/cloud-react/lib/overlay/OverlayProvider/useOverlay";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { Overlays } from "./Overlays";

export const ModalConnect = () => {
  const code = ``;

  const { openModal } = useOverlay().modal;

  return (
    <>
      <Overlays />
      <Demo showThemes={false} centered>
        <div className="svg-box">
          <Button
            type="text"
            text={"Connect"}
            iconTransform="grow-1"
            onClick={() => {
              console.log("click");
              openModal({ key: "Connect" });
            }}
            style={{ color: "white", fontSize: "1.05rem" }}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
