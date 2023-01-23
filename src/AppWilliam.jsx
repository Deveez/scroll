import React, { useLayoutEffect, useRef, useState } from "react";

function AppWilliam() {
  const [height, setHeight] = useState(0);

  const headerRef = useRef();
  const footerRef = useRef();

  useLayoutEffect(() => {
    const getHeight = () => {
      if (headerRef.current.clientHeight && footerRef.current.clientHeight) {
        setHeight(window.innerHeight - (headerRef.current.clientHeight + footerRef.current.clientHeight) || 0);
      }
    };

    getHeight();
    window.addEventListener("resize", getHeight);

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, [headerRef, footerRef]);

  return (
    <div style={{ height: "100vh" }}>
      <div ref={headerRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat volutpat quam, eget bibendum leo. Praesent
        lacinia purus non turpis suscipit, nec bibendum erat sagittis. Suspendisse rhoncus sagittis sapien nec mattis.
        Cras efficitur condimentum quam, nec malesuada velit interdum dapibus. Phasellus aliquam suscipit varius. Nunc
        risus purus, fermentum sed massa in, venenatis hendrerit eros. Sed quis nisi in risus tempus fringilla. Aliquam
        laoreet erat at nunc consectetur dignissim. Nam tortor nibh, tempor nec rhoncus quis, lacinia a mauris. Donec
        vitae urna faucibus, mattis orci quis, eleifend mauris. Fusce ullamcorper, enim eu blandit auctor, neque ipsum
        aliquam mauris, eget interdum dolor justo imperdiet metus. Nam facilisis, enim id ultrices sollicitudin, quam
        velit elementum augue, id elementum augue sem sit amet enim.
      </div>
      <div style={{ height, overflowY: "auto" }}>
        {/* Uniquement scroll sur ça */}
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
      <div ref={footerRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat volutpat quam, eget bibendum leo. Praesent
        lacinia purus non turpis suscipit, nec bibendum erat sagittis. Suspendisse rhoncus sagittis sapien nec mattis.
        Cras efficitur condimentum quam, nec malesuada velit interdum dapibus. Phasellus aliquam suscipit varius. Nunc
        risus purus, fermentum sed massa in, venenatis hendrerit eros. Sed quis nisi in risus tempus fringilla. Aliquam
        laoreet erat at nunc consectetur dignissim. Nam tortor nibh, tempor nec rhoncus quis, lacinia a mauris. Donec
        vitae urna faucibus, mattis orci quis, eleifend mauris. Fusce ullamcorper, enim eu blandit auctor, neque ipsum
        aliquam mauris, eget interdum dolor justo imperdiet metus. Nam facilisis, enim id ultrices sollicitudin, quam
        velit elementum augue, id elementum augue sem sit amet enim.
      </div>
    </div>
  );
}

export default AppWilliam;
