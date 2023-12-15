/* eslint-disable react/prop-types */
import { Children } from "react";
import "./grid.css";
export default function Masonry({
  children,
  columnWidth = 300,
  columnCount = 3,
  columnGap = 30,
}) {
  const colStyles = { marginBottom: columnGap };
  const renderChildren = () => {
    return Array.isArray(children) ? (
      Children.map(children, (child) => (
        <div className="grid-css-col" style={colStyles}>
          {child}
        </div>
      ))
    ) : (
      <div className="grid-css-col" style={colStyles}>
        {children}
      </div>
    );
  };

  return (
    <div
      className="grid-css-container"
      style={{ columnCount, columnWidth, columnGap }}
    >
      {renderChildren()}
    </div>
  );
}
