/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { range } from "ramda";
import "./grid.css";

const MAX_HEIGHT_DEFAULT = 350;
const GAP_DEFAULT = 4;
const FIXED = 0.5;
const mark_point = 4;

const JustifyGrid = ({
  data,
  keyExtractor,
  renderItem,
  rowHeight = MAX_HEIGHT_DEFAULT,
  gap = GAP_DEFAULT,
}) => {
  const [dataState, setDataState] = useState([]);
  const containerRef = (useRef < HTMLElement) | (null > null);

  const calculatorHeights = () => {
    if (!containerRef.current) {
      return;
    }
    const gridWidth = containerRef.current.offsetWidth;
    let ratio = 0;
    let minIndex = 0;
    let maxIndex = 0;
    setDataState(
      data.reduce((arr, item, index) => {
        const { width, height } = item;
        ratio += width / height;
        // console.log(minIndex, maxIndex);
        const _height = gridWidth / ratio;
        // EXAMPLE
        // const _height = (gridWidth + 90) / ratio;
        // (1200 - 90) / 4.3321678321678325 = 256.2227602905569
        // _height - (gap * (maxIndex - minIndex)) / ratio
        // 1200 / 4.3321678321678325 = 256.2227602905569 + 90 / 4.3321678321678325
        // Kiểm tra xem tỷ lệ chiều cao của tổng các thằng < rowHeight
        // thì sẽ đc add và reset lại ratio
        if (_height < rowHeight) {
          maxIndex = index;
          arr.push({
            minIndex,
            maxIndex,
            height: _height - (gap * (maxIndex - minIndex)) / ratio + FIXED,
          });
          ratio = 0;
          minIndex = index + 1;
        } else {
          // nếu lớn hơn rowHeight nhưng là cái item cuối cùng thì cũng đc add
          const isLastItem = index === data.length - 1;
          if (isLastItem) {
            maxIndex = index;
            arr.push({
              minIndex,
              maxIndex,
              height: _height - (gap * (maxIndex - minIndex)) / ratio + FIXED,
            });
            minIndex = index + 1;
          }
        }
        return arr;
      }, [])
    );
  };

  const getRowStyle = (row, index) => {
    const gapIgnoreLastItem = index === dataState.length - 1 ? 0 : gap;
    return {
      height:
        dataState.length > mark_point
          ? row.height + gapIgnoreLastItem
          : rowHeight,
      paddingBottom: gapIgnoreLastItem,
      marginLeft: -gap / 2,
      marginRight: -gap / 2,
    };
  };

  const renderRow = (row, index) => {
    const rowItems = range(row.minIndex, row.maxIndex + 1);
    const rowStyle = getRowStyle(row, index);
    return (
      <div key={index} className="justify-grid-row" style={rowStyle}>
        {rowItems.map((item, index) => {
          const key = keyExtractor({ item: data[index], index });
          return (
            <div
              key={key}
              className="justify-grid-item"
              style={{ paddingLeft: gap / 2, paddingRight: gap / 2 }}
            >
              {renderItem({
                item: {
                  ...data[item],
                  rowHeight: row.height,
                },
                index: item,
              })}
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    calculatorHeights();
    window.addEventListener("resize", calculatorHeights);
    return () => {
      window.removeEventListener("resize", calculatorHeights);
    };
  }, []);

  useEffect(() => {
    calculatorHeights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="justify-grid-container" ref={containerRef}>
      {dataState.map(renderRow)}
    </div>
  );
};

export default JustifyGrid;
