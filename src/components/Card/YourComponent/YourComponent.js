import React, { useState } from "react";
import "./YourComponent.css";
import { RiArrowDownSFill, VscTriangleDown } from "react-icons/vsc";
function YourComponent({ ApiCredits }) {
  const [showBlockCast, setShowBlockCast] = useState(false);
  const [showBlock, setShowBlock] = useState({});

  const toggleShowBlock = (itemId) => {
    setShowBlock((prevShowBlock) => ({
      ...prevShowBlock,
      [itemId]: !prevShowBlock[itemId],
    }));
  };

  return (
    <div className="cast_box">
      <button
        onClick={() => setShowBlockCast(!showBlockCast)}
        className="showBlockCast-button"
      >
        Cast:
      </button>
      {showBlockCast && (
        <div className="cast">
          Cast:
          {ApiCredits.cast &&
            ApiCredits.cast.map((item) => (
              <div key={item.id} className="text-overview-box">
                <div className="text-overview">
                  <div
                    onMouseEnter={() => toggleShowBlock(item.id)}
                    onMouseLeave={() => toggleShowBlock(item.id)}
                  >
                    {item.profile_path && (
                      <VscTriangleDown
                        className={
                          showBlock[item.id] ? "TriangleDown" : "TriangleRight"
                        }
                      />
                    )}
                    {item.name}
                  </div>
                </div>
                {showBlock[item.id] && item.profile_path && (
                  <div className="showBlock-overview-img">
                    <div className="img-box">
                      <img
                        className="img"
                        src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default YourComponent;
