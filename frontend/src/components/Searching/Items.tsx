import "../../styles/components/Searching/Items.scss";
import { Equipments } from "../../asset";
import { RootState } from "../../store";
import {
  replaceAllTagsWithClicked,
  setInstantSearch,
} from "../../features/components/Searching/searchFilterSlice";
import { useSelector, useDispatch } from "react-redux";
import { EquippedItem, unequipItem } from "../../features/components/Builder/equipedItemsSlice";
import { removeEquipmentBonus } from "../../features/components/Builder/classInformationsSlice";
import React from "react";

const Items: React.FC = () => {
  const dispatch = useDispatch();
  const equippedItems = useSelector((state: RootState) => state.equippedItem);
  const currentFilters = useSelector((state: RootState) => state.searchFilters);

  const handleUnequip = (item: EquippedItem, tag: string) => {
    dispatch(unequipItem({
      tag
    }));
    dispatch(
      removeEquipmentBonus(item.equipmentValues)
    );
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
        console.log(item);
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
                onClick={() => handleUnequip(equippedItem, item.tag)}
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