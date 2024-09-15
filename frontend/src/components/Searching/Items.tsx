import "../../styles/components/Searching/Items.scss";
import { Equipments } from "../../asset";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { unequipItem } from "../../features/components/Builder/equipedItemsSlice";
import React from "react";

const Items: React.FC = () => {
  const dispatch = useDispatch();
  const equippedItems = useSelector((state: RootState) => state.equippedItem);

  const handleUnequip = (tag: string) => {
    dispatch(unequipItem({ tag }));
  };

  return (
    <div className="items-container">
      {Equipments.map((item, index) => {
        const equippedItem = equippedItems[item.tag];
        return (
          <div key={index} className="item-wrapper">
            <img
              src={equippedItem ? equippedItem.src : item.src}
              alt={equippedItem ? equippedItem.alt : item.alt}
              className="item-image"
              data-tag={item.tag}
            />
            {equippedItem && (
              <button
                className="unequip-button"
                onClick={() => handleUnequip(item.tag)}
              >
                &times;
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Items;
