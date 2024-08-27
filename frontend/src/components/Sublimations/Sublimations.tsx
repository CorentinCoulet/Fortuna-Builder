import React, { useState } from "react";
import { shards, parchments } from "../../asset";
import "../../styles/components/Sublimations/Sublimations.scss";
import { FaSearch } from "react-icons/fa";

const comboShards = {
  red: { src: shards[1].src, alt: shards[1].alt }, // Rouge
  green: { src: shards[2].src, alt: shards[2].alt }, // Vert
  blue: { src: shards[3].src, alt: shards[3].alt }, // Bleu
};

const fakeSublimations = {
  1: {
    label: "Abandon",
    max: 6,
    levels: {
      1: {
        bonus: {
          wp: 1,
          range: 1,
          dodge: -150,
        },
        description:
          "Au début du premier tour, gagnez 1 PW et 1 portée, mais perdez 150 esquive.",
      },
      2: {
        bonus: {
          wp: 1,
          range: 1,
          dodge: -100,
        },
        description:
          "Au début du premier tour, gagnez 1 PW et 1 portée, mais perdez 100 esquive.",
      },
      3: {
        bonus: {
          wp: 1,
          range: 1,
          dodge: -50,
        },
        description:
          "Au début du premier tour, gagnez 1 PW et 1 portée, mais perdez 50 esquive.",
      },
    },
    order: [comboShards.green, comboShards.red, comboShards.blue],
  },
  2: {
    label: "Accumulation",
    max: 4,
    levels: {
      1: {
        bonus: {
          ap: 1,
          meleeMastery: 50,
          dodge: -150,
        },
        description:
          "Au début du combat, gagnez 1 PA et 50 Maîtrise Mêlée, mais perdez 150 esquive.",
      },
      2: {
        bonus: {
          ap: 1,
          meleeMastery: 75,
          dodge: -100,
        },
        description:
          "Au début du combat, gagnez 1 PA et 75 Maîtrise Mêlée, mais perdez 100 esquive.",
      },
      3: {
        bonus: {
          ap: 1,
          meleeMastery: 100,
          dodge: -50,
        },
        description:
          "Au début du combat, gagnez 1 PA et 100 Maîtrise Mêlée, mais perdez 50 esquive.",
      },
    },
    order: [comboShards.green, comboShards.green, comboShards.blue],
  },
  3: {
    label: "Acribie",
    max: 6,
    levels: {
      1: {
        bonus: {
          critMastery: 75,
          critical: 2,
          dodge: -100,
        },
        description:
          "Lors d'un coup critique, gagnez 75 Maîtrise Critique et 2% Critique, mais perdez 100 esquive.",
      },
      2: {
        bonus: {
          critMastery: 100,
          critical: 3,
          dodge: -75,
        },
        description:
          "Lors d'un coup critique, gagnez 100 Maîtrise Critique et 3% Critique, mais perdez 75 esquive.",
      },
      3: {
        bonus: {
          critMastery: 125,
          critical: 4,
          dodge: -50,
        },
        description:
          "Lors d'un coup critique, gagnez 125 Maîtrise Critique et 4% Critique, mais perdez 50 esquive.",
      },
    },
    order: [comboShards.red, comboShards.green, comboShards.red],
  },
  4: {
    label: "Agilité Vitale",
    max: 3,
    levels: {
      1: {
        bonus: {
          mp: 1,
          dodge: 20,
        },
        description:
          "Augmente votre mobilité pour chaque ennemi à proximité (+1 PM, +20 Esquive).",
      },
      2: {
        bonus: {
          mp: 2,
          dodge: 30,
        },
        description:
          "Augmente votre mobilité pour chaque ennemi à proximité (+2 PM, +30 Esquive).",
      },
      3: {
        bonus: {
          mp: 3,
          dodge: 40,
        },
        description:
          "Augmente votre mobilité pour chaque ennemi à proximité (+3 PM, +40 Esquive).",
      },
    },
    order: [comboShards.green, comboShards.blue, comboShards.red],
  },
  5: {
    label: "Bénédiction",
    max: 5,
    levels: {
      1: {
        bonus: {
          heals: 50,
        },
        description: "Augmente les soins prodigués de 50.",
      },
      2: {
        bonus: {
          heals: 75,
        },
        description: "Augmente les soins prodigués de 75.",
      },
      3: {
        bonus: {
          heals: 100,
        },
        description: "Augmente les soins prodigués de 100.",
      },
    },
    order: [comboShards.blue, comboShards.red, comboShards.blue],
  },
  6: {
    label: "Bouclier Ardent",
    max: 6,
    levels: {
      1: {
        bonus: {
          baseArmor: 50,
          fireResist: 10,
          dodge: -100,
        },
        description:
          "Accorde un bouclier de 50 et +10 Résistance Feu, mais -100 Esquive.",
      },
      2: {
        bonus: {
          baseArmor: 75,
          fireResist: 20,
          dodge: -75,
        },
        description:
          "Accorde un bouclier de 75 et +20 Résistance Feu, mais -75 Esquive.",
      },
      3: {
        bonus: {
          baseArmor: 100,
          fireResist: 30,
          dodge: -50,
        },
        description:
          "Accorde un bouclier de 100 et +30 Résistance Feu, mais -50 Esquive.",
      },
    },
    order: [comboShards.red, comboShards.red, comboShards.blue],
  },
  7: {
    label: "Corps-à-Corps",
    max: 3,
    levels: {
      1: {
        bonus: {
          meleeMastery: 50,
        },
        description: "Augmente la Maîtrise Mêlée de 50 après un déplacement.",
      },
      2: {
        bonus: {
          meleeMastery: 75,
        },
        description: "Augmente la Maîtrise Mêlée de 75 après un déplacement.",
      },
      3: {
        bonus: {
          meleeMastery: 100,
        },
        description: "Augmente la Maîtrise Mêlée de 100 après un déplacement.",
      },
    },
    order: [comboShards.red, comboShards.red, comboShards.green],
  },
  8: {
    label: "Détermination",
    max: 4,
    levels: {
      1: {
        bonus: {
          will: 2,
          lock: 10,
        },
        description:
          "Augmente la volonté de 2 et le tacle de 10 après chaque coup subi.",
      },
      2: {
        bonus: {
          will: 3,
          lock: 15,
        },
        description:
          "Augmente la volonté de 3 et le tacle de 15 après chaque coup subi.",
      },
      3: {
        bonus: {
          will: 4,
          lock: 20,
        },
        description:
          "Augmente la volonté de 4 et le tacle de 20 après chaque coup subi.",
      },
    },
    order: [comboShards.green, comboShards.green, comboShards.green],
  },
  9: {
    label: "Fureur",
    max: 6,
    levels: {
      1: {
        bonus: {
          berserkMastery: 50,
          critical: 2,
          dodge: -100,
        },
        description:
          "Augmente la Maîtrise Berserk de 50 et +2% Critique, mais -100 Esquive.",
      },
      2: {
        bonus: {
          berserkMastery: 75,
          critical: 3,
          dodge: -75,
        },
        description:
          "Augmente la Maîtrise Berserk de 75 et +3% Critique, mais -75 Esquive.",
      },
      3: {
        bonus: {
          berserkMastery: 100,
          critical: 4,
          dodge: -50,
        },
        description:
          "Augmente la Maîtrise Berserk de 100 et +4% Critique, mais -50 Esquive.",
      },
    },
    order: [comboShards.red, comboShards.blue, comboShards.red],
  },
  10: {
    label: "Insaisissable",
    max: 4,
    levels: {
      1: {
        bonus: {
          dodge: 30,
          block: 5,
        },
        description:
          "Réduit les chances d'être bloqué avec +30 Esquive et +5 Blocage.",
      },
      2: {
        bonus: {
          dodge: 40,
          block: 10,
        },
        description:
          "Réduit les chances d'être bloqué avec +40 Esquive et +10 Blocage.",
      },
      3: {
        bonus: {
          dodge: 50,
          block: 15,
        },
        description:
          "Réduit les chances d'être bloqué avec +50 Esquive et +15 Blocage.",
      },
    },
    order: [comboShards.green, comboShards.blue, comboShards.blue],
  },
  11: {
    label: "Instinct de Survie",
    max: 5,
    levels: {
      1: {
        bonus: {
          waterResist: 10,
          earthResist: 10,
          airResist: 10,
          fireResist: 10,
        },
        description:
          "Augmente les résistances élémentaires de 10 dans chaque élément quand la vie est inférieure à 50%.",
      },
      2: {
        bonus: {
          waterResist: 15,
          earthResist: 15,
          airResist: 15,
          fireResist: 15,
        },
        description:
          "Augmente les résistances élémentaires de 15 dans chaque élément quand la vie est inférieure à 50%.",
      },
      3: {
        bonus: {
          waterResist: 20,
          earthResist: 20,
          airResist: 20,
          fireResist: 20,
        },
        description:
          "Augmente les résistances élémentaires de 20 dans chaque élément quand la vie est inférieure à 50%.",
      },
    },
    order: [comboShards.green, comboShards.red, comboShards.green],
  },
  12: {
    label: "Maîtrise Élémentaire",
    max: 6,
    levels: {
      1: {
        bonus: {
          waterMastery: 20,
          earthMastery: 20,
          airMastery: 20,
          fireMastery: 20,
        },
        description:
          "Augmente les maîtrises élémentaires de 20 pour chaque coup réussi.",
      },
      2: {
        bonus: {
          waterMastery: 30,
          earthMastery: 30,
          airMastery: 30,
          fireMastery: 30,
        },
        description:
          "Augmente les maîtrises élémentaires de 30 pour chaque coup réussi.",
      },
      3: {
        bonus: {
          waterMastery: 40,
          earthMastery: 40,
          airMastery: 40,
          fireMastery: 40,
        },
        description:
          "Augmente les maîtrises élémentaires de 40 pour chaque coup réussi.",
      },
    },
    order: [comboShards.blue, comboShards.red, comboShards.green],
  },
  13: {
    label: "Puissance Dévastatrice",
    max: 4,
    levels: {
      1: {
        bonus: {
          damageDealt: 5,
          dodge: -150,
        },
        description: "Augmente les dégâts infligés de 5%, mais -150 Esquive.",
      },
      2: {
        bonus: {
          damageDealt: 7,
          dodge: -100,
        },
        description: "Augmente les dégâts infligés de 7%, mais -100 Esquive.",
      },
      3: {
        bonus: {
          damageDealt: 10,
          dodge: -50,
        },
        description: "Augmente les dégâts infligés de 10%, mais -50 Esquive.",
      },
    },
    order: [comboShards.red, comboShards.red, comboShards.red],
  },
  14: {
    label: "Résistance Divine",
    max: 3,
    levels: {
      1: {
        bonus: {
          block: 10,
          earthResist: 10,
          fireResist: 10,
        },
        description:
          "Augmente le Blocage de 10 et la Résistance Terre et Feu de 10.",
      },
      2: {
        bonus: {
          block: 15,
          earthResist: 15,
          fireResist: 15,
        },
        description:
          "Augmente le Blocage de 15 et la Résistance Terre et Feu de 15.",
      },
      3: {
        bonus: {
          block: 20,
          earthResist: 20,
          fireResist: 20,
        },
        description:
          "Augmente le Blocage de 20 et la Résistance Terre et Feu de 20.",
      },
    },
    order: [comboShards.green, comboShards.green, comboShards.red],
  },
  15: {
    label: "Vigilance",
    max: 4,
    levels: {
      1: {
        bonus: {
          initiative: 10,
          critical: 2,
        },
        description:
          "Augmente l'Initiative de 10 et les chances de coup critique de 2%.",
      },
      2: {
        bonus: {
          initiative: 15,
          critical: 3,
        },
        description:
          "Augmente l'Initiative de 15 et les chances de coup critique de 3%.",
      },
      3: {
        bonus: {
          initiative: 20,
          critical: 4,
        },
        description:
          "Augmente l'Initiative de 20 et les chances de coup critique de 4%.",
      },
    },
    order: [comboShards.blue, comboShards.blue, comboShards.green],
  },
};

const Sublimations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [hoveredSublimation, setHoveredSublimation] = useState<null | {
    key: string;
    level: number;
  }>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredSublimations = Object.keys(fakeSublimations).filter((key) => {
    const sublimation = fakeSublimations[key];
    return sublimation.label.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (searchTerm.length === 0) {
      setIsActive(false);
    }
  };

  const handleMouseEnter = (key: string, level: number) => {
    setHoveredSublimation({ key, level });
  };

  const handleMouseLeave = () => {
    setHoveredSublimation(null);
  };

  return (
    <div className="sublimations-container">
      <div className="sublimations-header">
        <h2>SUBLIMATIONS</h2>
        <div className="cntr">
          <div className="cntr-innr">
            <label
              className={`search ${isActive ? "active" : ""}`}
              htmlFor="inpt_search"
            >
              <FaSearch className="search-icon" />
              <input
                id="inpt_search"
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          </div>
        </div>
      </div>
      {filteredSublimations.map((key) => {
        const sublimation = fakeSublimations[key];
        const maxLevel = sublimation.max;

        return (
          <div key={key} className="sublimation-item">
            <div className="sublimation-item-info">
              <div>
                <div className="label-sublimation">
                  <p>
                    [MAX: {sublimation.max}] {sublimation.label}
                  </p>
                </div>
                <div className="shards">
                  {sublimation.order.map((shard, index) => (
                    <img
                      key={index}
                      src={shard.src}
                      alt={shard.alt}
                      className="rune-image"
                    />
                  ))}
                </div>
              </div>
              <div className="sublimation-levels">
                {[1, 2, 3].map((level) => (
                  <div className="level-container" key={level}>
                    <img
                      src={parchments[level]?.src}
                      alt={parchments[level]?.alt || `Niveau ${level}`}
                      className="level-image"
                      onMouseEnter={() => handleMouseEnter(key, level)}
                      onMouseLeave={handleMouseLeave}
                    />
                    <span className="level-number">{level}</span>
                  </div>
                ))}
              </div>
            </div>
            {hoveredSublimation && hoveredSublimation.key === key && (
              <div className="sublimation-tooltip">
                <div>
                  <div className="hovered-image">
                    <img
                      src={parchments[hoveredSublimation.level]?.src}
                      alt={
                        parchments[hoveredSublimation.level]?.alt ||
                        `Niveau ${hoveredSublimation.level}`
                      }
                      className="level-image"
                    />
                    <span className="level-number">
                      {hoveredSublimation.level}
                    </span>
                  </div>
                  <div>
                    <div className="label-sublimation">
                      {sublimation.label} [MAX: {maxLevel}]
                    </div>
                    <div className="shards">
                      {sublimation.order.map((shard, index) => (
                        <img
                          key={index}
                          src={shard.src}
                          alt={shard.alt}
                          className="rune-image"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="description">
                  <p>
                    {sublimation.levels[hoveredSublimation.level].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sublimations;
