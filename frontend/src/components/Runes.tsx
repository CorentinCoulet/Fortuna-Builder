import React from "react";
import "../styles/components/Runes.scss";
import { runesEquipment, parchments, shards } from "../asset.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const whiteParchment = {
  whiteParchment: parchments[3],
  whiteShard: shards[5],
  epic: shards[6],
  relic: shards[7],
};

const Runes: React.FC = () => {
  const renderList = () => {
    return Object.keys(runesEquipment).map((index) => {
      const equipment = runesEquipment[index];

      return (
        <div key={index} className="rune-item">
          <div className="rune-images">
            <div>
                {[...Array(4)].map((_, i) => (
                <img
                    key={`shard-${index}-${i}`}
                    loading="lazy"
                    src={whiteParchment.whiteShard.src}
                    alt={whiteParchment.whiteShard.alt}
                />
                ))}
            </div>
            <div>
                <img
                key={`parchment-${index}`}
                loading="lazy"
                src={whiteParchment.whiteParchment.src}
                alt={whiteParchment.whiteParchment.alt}
                />
                <img
                key={`equipment-${index}`}
                loading="lazy"
                src={equipment.src}
                alt={equipment.alt}
                />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="runes">
      <div>
        <h2>MES RUNES</h2>
      </div>
      {renderList()}
      <div className="runes-trash">
        <div>
          <img
            loading="lazy"
            key={`${whiteParchment.epic.src}-${whiteParchment.epic.alt}`}
            src={whiteParchment.epic.src}
            alt={whiteParchment.epic.alt}
          />
          <img
            loading="lazy"
            key={`${whiteParchment.relic.src}-${whiteParchment.relic.alt}`}
            src={whiteParchment.relic.src}
            alt={whiteParchment.relic.alt}
          />
        </div>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Runes;
