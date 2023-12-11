/* eslint-disable react/prop-types */
import "./styles.css";

export const FadeIn = ({ children }) => {
  return (
    <div
      className="animate__animated animate__fadeIn"
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};
