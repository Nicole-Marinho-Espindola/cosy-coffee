import React, { useEffect, useRef } from "react";
import { TbDragDrop } from "react-icons/tb";
import Glider from "glider-js";
import "glider-js/glider.min.css";
import styles from "./css/slider.module.css";
import Img1 from "../../img/cafe-background.jpg";
import Img2 from "../../img/cafe-background2.jpg";

function Slider() {
  const gliderRef = useRef(null);

  useEffect(() => {
    let gliderInstance;

    if (gliderRef.current) {
      new Glider(gliderRef.current, {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
      });
    }

    return () => {
      if (gliderInstance) {
        gliderInstance.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.main_content}>
      <h1>Our coffee around the world</h1>

      <div className={styles.glider_contain}>
        <div className={styles.glider} ref={gliderRef}>
          <div className={styles.glider__track}>
            <ul className={styles.glider__slides}>
              <li className={styles.glider__slide}>
                <img src={Img1} alt="IMG" />
              </li>
              <li className={styles.glider__slide}>
                <img src={Img2} alt="IMG" />
              </li>
              <li className={styles.glider__slide}>
                <img src={Img1} alt="IMG" />
              </li>
              <li className={styles.glider__slide}>
                <img src={Img2} alt="IMG" />
              </li>
              <li className={styles.glider__slide}>
                <img src={Img1} alt="IMG" />
              </li>
              <li className={styles.glider__slide}>
                <img src={Img2} alt="IMG" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.drag__block}>
        <TbDragDrop className={styles.drag__icon}/>
      </div>
    </div>
  );
}

export default Slider;
