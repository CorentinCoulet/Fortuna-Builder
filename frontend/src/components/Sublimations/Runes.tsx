import React, { useEffect, useState } from "react";
import "../../styles/components/Sublimations/Runes.scss";
import { runesEquipment, parchments, shards } from "../../asset.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProperty,
  updateResistances,
  updateMasteries,
  ClassInformationsState,
} from "../../features/components/classInformationsSlice";
import { RootState, AppDispatch } from "../../store.ts";

interface Shard {
  src: string;
  alt: string;
  statValue: number;
  label: string;
  runeLevel?: number;
  original?: Shard | null;
}

interface RunesProps {
  isReadOnly?: boolean;
}

const whiteParchment = {
  whiteParchment: parchments[3],
  whiteShard: {
    src: shards[5].src,
    alt: shards[5].alt,
    statValue: 0,
    label: "Default",
  },
  epic: shards[6],
  relic: shards[7],
};

const activeShard = {
  src: shards[4].src,
  alt: shards[4].alt,
  statValue: 0,
  label: "Active",
};

// Sauvegarde les runes
const saveShardsToLocalStorage = (
  appliedShards: Array<Array<Shard | null>>
) => {
  localStorage.setItem("appliedShards", JSON.stringify(appliedShards));
};

// Charge les runes
const loadShardsFromLocalStorage = (): Array<Array<Shard | null>> => {
  const savedShards = localStorage.getItem("appliedShards");
  return savedShards ? JSON.parse(savedShards) : null;
};

const getActionsForLabel = (
  label: string
): keyof ClassInformationsState | string | undefined => {
  const lowerLabel = label.toLowerCase();

  const mapping: { [key: string]: keyof ClassInformationsState | string } = {
    "maîtrise mêlée": "meleeMastery",
    "maîtrise distance": "distanceMastery",
    "maîtrise berserk": "berserkMastery",
    "résistance terre": "resistances:earthResist",
    "maîtrise critique": "critMastery",
    "maîtrise dos": "rearMastery",
    esquive: "dodge",
    initiative: "initiative",
    "résistance feu": "resistances:fireResist",
    "maîtrise elémentaire": "masteries",
    tacle: "lock",
    "résistance eau": "resistances:waterResist",
    "résistance air": "resistances:airResist",
    vie: "baseHp",
    "maîtrise soin": "healMastery",
  };

  return mapping[lowerLabel];
};

const applyBonus = (
  shard: Shard,
  classInformations: ClassInformationsState,
  dispatch: AppDispatch
) => {
  const actionKey = getActionsForLabel(shard.label);
  if (actionKey) {
    if (typeof actionKey === "string" && actionKey.startsWith("resistances:")) {
      const resistanceKey = actionKey.split(
        ":"
      )[1] as keyof ClassInformationsState["resistances"];
      const currentResistance =
        classInformations.resistances[resistanceKey] || 0;
      dispatch(
        updateResistances({
          [resistanceKey]: currentResistance + shard.statValue,
        })
      );
    } else if (actionKey === "masteries") {
      const currentMasteries = classInformations.masteries;
      dispatch(
        updateMasteries({
          waterMastery: currentMasteries.waterMastery + shard.statValue,
          earthMastery: currentMasteries.earthMastery + shard.statValue,
          airMastery: currentMasteries.airMastery + shard.statValue,
          fireMastery: currentMasteries.fireMastery + shard.statValue,
        })
      );
    } else {
      const currentValue =
        (classInformations[
          actionKey as keyof ClassInformationsState
        ] as number) || 0;
      dispatch(
        updateProperty({
          key: actionKey as keyof ClassInformationsState,
          value: currentValue + shard.statValue,
        })
      );
    }
  }
};

const removeBonus = (
  shard: Shard | null,
  classInformations: ClassInformationsState,
  dispatch: AppDispatch,
  count: number = 1
) => {
  if (!shard) return;

  const actionKey = getActionsForLabel(shard.label);

  if (actionKey) {
    if (typeof actionKey === "string" && actionKey.startsWith("resistances:")) {
      const resistanceKey = actionKey.split(
        ":"
      )[1] as keyof ClassInformationsState["resistances"];
      const currentResistance =
        classInformations.resistances[resistanceKey] || 0;
      dispatch(
        updateResistances({
          [resistanceKey]: currentResistance - shard.statValue * count,
        })
      );
    } else if (actionKey === "masteries") {
      const currentMasteries = classInformations.masteries;
      dispatch(
        updateMasteries({
          waterMastery: currentMasteries.waterMastery - shard.statValue * count,
          earthMastery: currentMasteries.earthMastery - shard.statValue * count,
          airMastery: currentMasteries.airMastery - shard.statValue * count,
          fireMastery: currentMasteries.fireMastery - shard.statValue * count,
        })
      );
    } else {
      const currentValue =
        (classInformations[
          actionKey as keyof ClassInformationsState
        ] as number) || 0;
      dispatch(
        updateProperty({
          key: actionKey as keyof ClassInformationsState,
          value: currentValue - shard.statValue * count,
        })
      );
    }
  }
};

const Runes: React.FC<RunesProps> = ({ isReadOnly = false }) => {
  const dispatch = useDispatch();
  const classInformations = useSelector(
    (state: RootState) => state.classInformations
  );
  const selectedShard = useSelector(
    (state: RootState) => state.runes.selectedShard
  );
  const [appliedShards, setAppliedShards] = useState<
    Array<Array<Shard | null>>
  >(() => {
    const savedShards = loadShardsFromLocalStorage();
    return savedShards
      ? savedShards
      : Array(Object.keys(runesEquipment).length)
          .fill(null)
          .map(() => Array(4).fill(null));
  });

  useEffect(() => {
    saveShardsToLocalStorage(appliedShards);
  }, [appliedShards]);

  const handleShardClick = (rowIndex: number, shardIndex: number) => {
    if (isReadOnly) return;
    const currentShard = appliedShards[rowIndex][shardIndex];
    if (currentShard && currentShard.label !== "Default") {
      removeBonus(currentShard, classInformations, dispatch);
    } else if (selectedShard) {
      applyBonus(selectedShard, classInformations, dispatch);
    }

    setAppliedShards((prev) => {
      const newShards = [...prev];
      const currentRow = newShards[rowIndex] || Array(4).fill(null);

      if (selectedShard) {
        const isSameShard =
          currentRow[shardIndex] &&
          currentRow[shardIndex]?.statValue === selectedShard.statValue &&
          currentRow[shardIndex]?.label === selectedShard.label &&
          currentRow[shardIndex]?.runeLevel === selectedShard.runeLevel;

        if (isSameShard) {
          currentRow[shardIndex] = whiteParchment.whiteShard;
        } else {
          currentRow[shardIndex] = { ...selectedShard };
        }
      }

      newShards[rowIndex] = currentRow;
      return newShards;
    });
  };

  const handleShardRightClick = (
    e: React.MouseEvent<HTMLImageElement>,
    rowIndex: number,
    shardIndex: number
  ) => {
    e.preventDefault();
    if (isReadOnly) return;
    setAppliedShards((prev) => {
      const newShards = [...prev];
      const currentRow = newShards[rowIndex] || Array(4).fill(null);
      if (currentRow[shardIndex]) {
        const currentShard = currentRow[shardIndex];
        if (currentShard?.src === activeShard.src) {
          currentRow[shardIndex] = currentShard.original || null;
        } else {
          currentRow[shardIndex] = {
            ...currentShard!,
            src: activeShard.src,
            alt: activeShard.alt,
            original: currentShard,
          };
        }
      }

      newShards[rowIndex] = currentRow;
      return newShards;
    });
  };

  const handleTrashClick = () => {
    // Créer une copie des shards appliqués pour ne pas modifier l'état en cours de traitement
    const shardsToRemove = appliedShards
      .flat()
      .filter(
        (shard): shard is Shard => shard !== null && shard.label !== "Default"
      );

    // Calculer combien de fois chaque shard doit être supprimé
    const shardCounts = shardsToRemove.reduce((acc, shard) => {
      const key = `${shard.label}-${shard.statValue}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    // Retirer tous les bonus des runes actuellement appliquées
    Object.entries(shardCounts).forEach(([key, count]) => {
      const [label, statValue] = key.split("-");
      const shardToRemove = shardsToRemove.find(
        (shard) =>
          shard.label === label && shard.statValue === parseInt(statValue, 10)
      );
      if (shardToRemove) {
        removeBonus(shardToRemove, classInformations, dispatch, count);
      }
    });

    // Réinitialise toutes les runes à leur état par défaut
    setAppliedShards(
      Array(Object.keys(runesEquipment).length)
        .fill(null)
        .map(() => Array(4).fill(whiteParchment.whiteShard))
    );
  };

  const renderList = () => {
    return Object.keys(runesEquipment).map((index) => {
      const equipment = runesEquipment[index];
      const appliedShardRow = appliedShards[parseInt(index)] || [];

      return (
        <div key={index} className="rune-item">
          <div className="rune-images">
            <div>
              {[...Array(4)].map((_, i) => (
                <div className="shard-container" key={`shard-${index}-${i}`}>
                  <div onClick={() => handleShardClick(parseInt(index), i)}>
                    <img
                      loading="lazy"
                      src={
                        appliedShardRow[i]
                          ? appliedShardRow[i]!.src
                          : whiteParchment.whiteShard.src
                      }
                      alt={
                        appliedShardRow[i]
                          ? appliedShardRow[i]!.alt
                          : whiteParchment.whiteShard.alt
                      }
                      onContextMenu={(e) =>
                        handleShardRightClick(e, parseInt(index), i)
                      }
                      className={`shard-image ${isReadOnly ? "read-only" : ""}`}
                    />
                    {appliedShardRow[i] && appliedShardRow[i]!.runeLevel && (
                      <span className="shard-level">
                        {appliedShardRow[i]!.runeLevel}
                      </span>
                    )}
                  </div>
                  {appliedShardRow[i] &&
                    appliedShardRow[i]?.label !== "Default" && (
                      <div className="shard-hover-info">
                        <img
                          loading="lazy"
                          src={
                            appliedShardRow[i]
                              ? appliedShardRow[i]!.src
                              : whiteParchment.whiteShard.src
                          }
                          alt={
                            appliedShardRow[i]
                              ? appliedShardRow[i]!.alt
                              : whiteParchment.whiteShard.alt
                          }
                          onClick={() => handleShardClick(parseInt(index), i)}
                          onContextMenu={(e) =>
                            handleShardRightClick(e, parseInt(index), i)
                          }
                          className="shard-image"
                        />
                        <div>
                          <p>{appliedShardRow[i]!.statValue}</p>
                          <p>{appliedShardRow[i]!.label}</p>
                        </div>
                      </div>
                    )}
                </div>
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
        {!isReadOnly && (
          <FontAwesomeIcon icon={faTrashAlt} onClick={handleTrashClick} />
        )}
      </div>
    </div>
  );
};

export default Runes;
