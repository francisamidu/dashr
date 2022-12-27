import { MutableRefObject } from "react";

const clickOutsideRef = (
  contentRef: MutableRefObject<HTMLElement>,
  toggleRef: MutableRefObject<HTMLElement>
) => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", (e: any) => {
      if (toggleRef?.current?.contains(e.target)) {
        contentRef?.current?.classList.add("active");
      } else {
        if (!contentRef?.current?.contains(e.target)) {
          contentRef?.current?.classList.remove("active");
        }
      }
    });
  }
};
export default clickOutsideRef;
