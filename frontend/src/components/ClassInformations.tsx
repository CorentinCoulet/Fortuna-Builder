import React from "react";
import "../styles/components/ClassInformations.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setBuildName,
  setLevel,
  setHp,
  setArmor,
  setAp,
  setWp,
  setMp,
  setWaterArmor,
  setWaterMastery,
  setEarthArmor,
  setEarthMastery,
  setAirArmor,
  setAirMastery,
  setFireArmor,
  setFireMastery,
  setArmorReceived,
  setArmorGiven,
  setDamageDealt,
  setCritical,
  setInitiative,
  setDodge,
  setWisdom,
  setControl,
  setHeals,
  setBlock,
  setRange,
  setLock,
  setProspecting,
  setWill,
  setCritMastery,
  setCritResist,
  setRearMastery,
  setRearResist,
  setMeleeMastery,
  setDistanceResist,
  setHealMastery,
  setBerserkMastery,
} from "../features/components/classInformationsSlice";
import { RootState } from "../store";
import EditableValue from "./EditableValue";
import ImageSelector from "./ImageSelector";
import { Images } from "../asset";

const ClassInformations: React.FC = () => {
  const dispatch = useDispatch();
  const classInfo = useSelector((state: RootState) => state.classInformations);

  return (
    <div className="class-informations">
      <div className="statsGlobales">
        <ImageSelector images={Images} />
        <section className="sect2">
          <form>
            <label htmlFor="nom">Nom du Build : </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={classInfo.buildName}
              onChange={(e) => dispatch(setBuildName(e.target.value))}
            />
            <label htmlFor="lvl">Niveau : </label>
            <input
              type="number"
              name="lvl"
              id="lvl"
              value={classInfo.level}
              onChange={(e) => dispatch(setLevel(Number(e.target.value)))}
              min="1"
              max="230"
            />
          </form>
        </section>
      </div>
      <section className="sect3">
        <div className="primaryStats">
          <EditableValue
            id={1}
            label="Pdv"
            value={classInfo.hp}
            onChange={(value) => dispatch(setHp(value))}
          />
          <EditableValue
            id={2}
            label="Armure"
            value={classInfo.hp}
            onChange={(value) => dispatch(setArmor(value))}
          />
          <EditableValue
            id={3}
            label="PA"
            value={classInfo.ap}
            onChange={(value) => dispatch(setAp(value))}
          />
          <EditableValue
            id={4}
            label="PM"
            value={classInfo.mp}
            onChange={(value) => dispatch(setMp(value))}
          />
          <EditableValue
            id={5}
            label="PW"
            value={classInfo.wp}
            onChange={(value) => dispatch(setWp(value))}
          />
        </div>
        <div className="armorStats">
          <div className="elements">
            <div className="element-row">
              <EditableValue
                id={6}
                label=""
                value={classInfo.waterArmor}
                onChange={(value) => dispatch(setWaterArmor(value))}
              />
              <EditableValue
                id={7}
                label=""
                value={classInfo.waterMastery}
                onChange={(value) => dispatch(setWaterMastery(value))}
              />
              <EditableValue
                id={8}
                label=""
                value={classInfo.earthArmor}
                onChange={(value) => dispatch(setEarthArmor(value))}
              />
              <EditableValue
                id={9}
                label=""
                value={classInfo.earthMastery}
                onChange={(value) => dispatch(setEarthMastery(value))}
              />
            </div>
            <div className="element-row">
              <EditableValue
                id={10}
                label=""
                value={classInfo.airArmor}
                onChange={(value) => dispatch(setAirArmor(value))}
              />
              <EditableValue
                id={11}
                label=""
                value={classInfo.airMastery}
                onChange={(value) => dispatch(setAirMastery(value))}
              />
              <EditableValue
                id={12}
                label=""
                value={classInfo.fireArmor}
                onChange={(value) => dispatch(setFireArmor(value))}
              />
              <EditableValue
                id={13}
                label=""
                value={classInfo.fireMastery}
                onChange={(value) => dispatch(setFireMastery(value))}
              />
            </div>
          </div>
          <div className="armor-summary">
            <EditableValue
              id={14}
              label="Armure Reçue"
              value={classInfo.armorReceived}
              onChange={(value) => dispatch(setArmorReceived(value))}
            />
            <EditableValue
              id={15}
              label="Armure Donnée"
              value={classInfo.armorGiven}
              onChange={(value) => dispatch(setArmorGiven(value))}
            />
          </div>
        </div>
        <div className="abilities">
          <EditableValue
            id={16}
            label="Domm. Inf."
            value={classInfo.damageDealt}
            onChange={(value) => dispatch(setDamageDealt(value))}
          />
          <EditableValue
            id={17}
            label="Soins réal."
            value={classInfo.heals}
            onChange={(value) => dispatch(setHeals(value))}
          />
          <EditableValue
            id={18}
            label="Coup Crit."
            value={classInfo.critical}
            onChange={(value) => dispatch(setCritical(value))}
          />
          <EditableValue
            id={19}
            label="Parade"
            value={classInfo.block}
            onChange={(value) => dispatch(setBlock(value))}
          />
          <EditableValue
            id={20}
            label="Initiative"
            value={classInfo.initiative}
            onChange={(value) => dispatch(setInitiative(value))}
          />
          <EditableValue
            id={21}
            label="Portée"
            value={classInfo.range}
            onChange={(value) => dispatch(setRange(value))}
          />
          <EditableValue
            id={22}
            label="Esquive"
            value={classInfo.dodge}
            onChange={(value) => dispatch(setDodge(value))}
          />
          <EditableValue
            id={23}
            label="Tacle"
            value={classInfo.lock}
            onChange={(value) => dispatch(setLock(value))}
          />
          <EditableValue
            id={24}
            label="Sagesse"
            value={classInfo.wisdom}
            onChange={(value) => dispatch(setWisdom(value))}
          />
          <EditableValue
            id={25}
            label="Prospection"
            value={classInfo.prospecting}
            onChange={(value) => dispatch(setProspecting(value))}
          />
          <EditableValue
            id={26}
            label="Contrôle"
            value={classInfo.control}
            onChange={(value) => dispatch(setControl(value))}
          />
          <EditableValue
            id={27}
            label="Volonté"
            value={classInfo.will}
            onChange={(value) => dispatch(setWill(value))}
          />
        </div>
        <div className="masteries">
          <EditableValue
            id={28}
            label="Maitrise Critique"
            value={classInfo.critMastery}
            onChange={(value) => dispatch(setCritMastery(value))}
          />
          <EditableValue
            id={29}
            label="Résistance Critique"
            value={classInfo.critResist}
            onChange={(value) => dispatch(setCritResist(value))}
          />
          <EditableValue
            id={30}
            label="Maitrise Dos"
            value={classInfo.rearMastery}
            onChange={(value) => dispatch(setRearMastery(value))}
          />
          <EditableValue
            id={31}
            label="Résistance Dos"
            value={classInfo.rearResist}
            onChange={(value) => dispatch(setRearResist(value))}
          />
          <EditableValue
            id={32}
            label="Maitrise Mêlée"
            value={classInfo.meleeMastery}
            onChange={(value) => dispatch(setMeleeMastery(value))}
          />
          <EditableValue
            id={33}
            label="Maitrise Distance"
            value={classInfo.distanceMastery}
            onChange={(value) => dispatch(setDistanceResist(value))}
          />
          <EditableValue
            id={34}
            label="Maitrise Soin"
            value={classInfo.healMastery}
            onChange={(value) => dispatch(setHealMastery(value))}
          />
          <EditableValue
            id={35}
            label="Maitrise Berserk"
            value={classInfo.berserkMastery}
            onChange={(value) => dispatch(setBerserkMastery(value))}
          />
        </div>
      </section>
    </div>
  );
};

export default ClassInformations;
