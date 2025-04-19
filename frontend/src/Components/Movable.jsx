import { useEffect, useRef } from "react";
import styles from "./Movable.module.css";

function Movable({ direction, min, max, setTarget }) {
  const moveable = useRef(null);
  const canMove = useRef(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (canMove.current) {
        setTarget(
          direction === "v"
            ? Math.max(min, Math.min(max, event.clientX)) // Vertical movement
            : Math.max(min, Math.min(max, event.clientY)) // Horizontal movement
        );
      }
    };

    const handleMouseUp = () => {
      canMove.current = false;
    };

    const handleMouseDown = () => {
      canMove.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    if (moveable.current) {
      moveable.current.addEventListener("mousedown", handleMouseDown);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (moveable.current) {
        moveable.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }); // Dependencies ensure effect runs when values change

  return (
    <div
      ref={moveable}
      className={`${direction === "v" ? styles.vertical : styles.horizontal} ${styles.bar}`}
    ></div>
  );
}

export default Movable;
