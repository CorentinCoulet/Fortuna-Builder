import "../../styles/components/Searching/Items.scss";
import { Equipments } from "../../asset";
import { RootState } from "../../store";
import { replaceAllTagsWithClicked, setInstantSearch } from "../../features/components/Searching/searchFilterSlice";
import { useSelector, useDispatch } from "react-redux";
import { unequipItem } from "../../features/components/Builder/equipedItemsSlice";
import { resetEquipmentValues } from "../../features/components/Builder/classInformationsSlice";
import React from "react";

const Items: React.FC = () => {
  const dispatch = useDispatch();
  const equippedItems = useSelector((state: RootState) => state.equippedItem);
  const currentFilters = useSelector((state: RootState) => state.searchFilters);

  const handleUnequip = (tag: string) => {
    dispatch(unequipItem({ tag }));  
    dispatch(resetEquipmentValues());
  };

  const handleClick = (tag: string) => {
    if (!currentFilters.selectedEquipmentTags.includes(tag)) {
      dispatch(replaceAllTagsWithClicked(tag));
      dispatch(setInstantSearch(true));
    }
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
              onClick={() => handleClick(item.tag)}
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

