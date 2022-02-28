import { ReactElement } from "react";

import { Manager, Reference, Popper } from "react-popper";

interface Props {}

export default function ReactPopper({}: Props): ReactElement {
  return (
    <>
      <Manager>
        <Reference>
          {({ ref }) => (
            <button
              className="bg-white p-1 text-black rounded-lg"
              type="button"
              ref={ref}
            >
              Reference element
            </button>
          )}
        </Reference>
        <Popper placement="bottom">
          {({ ref, style, placement, arrowProps }) => (
            <div
              className="bg-blue-500 rounded-lg p-1 mt-3"
              ref={ref}
              style={style}
              data-placement={placement}
            >
              Popper element
              <div ref={arrowProps.ref} style={arrowProps.style} />
            </div>
          )}
        </Popper>
      </Manager>
    </>
  );
}
