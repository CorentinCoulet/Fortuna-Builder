import React, { useState } from "react";
import "../styles/components/ClassInformations.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProperty,
  updateResistances,
  updateMasteries,
  selectCalculatedStats
} from "../features/components/classInformationsSlice";
import { RootState } from "../store";
import EditableValue from "./EditableValue";
import TotalMasteriesCalcul from "./TotalMasteriesCalcul";
import ImageSelector from "./ImageSelector";
import { Images } from "../asset";

const ClassInformations: React.FC = () => {
  const dispatch = useDispatch();
  const classInfo = useSelector((state: RootState) => state.classInformations);
  const calculatedStats = useSelector(selectCalculatedStats);
  const [selectedMasteries, setSelectedMasteries] = useState<string[]>([]);

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
              onChange={(e) => dispatch(updateProperty({ key: 'buildName', value: e.target.value }))}
            />
            <label htmlFor="lvl">Niveau : </label>
            <input
              type="number"
              name="lvl"
              id="lvl"
              value={classInfo.level}
              onChange={(e) => dispatch(updateProperty({ key: 'level', value: Number(e.target.value) }))}
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
            value={calculatedStats.hp}
            onChange={(value) => dispatch(updateProperty({ key: 'baseHp', value }))}
          />
          <EditableValue
            id={2}
            label="Armure"
            value={calculatedStats.armor}
            onChange={(value) => dispatch(updateProperty({ key: 'baseArmor', value }))}
          />
          <EditableValue
            id={3}
            label="PA"
            value={calculatedStats.ap}
            onChange={(value) => dispatch(updateProperty({ key: 'ap', value }))}
          />
          <EditableValue
            id={4}
            label="PM"
            value={calculatedStats.mp}
            onChange={(value) => dispatch(updateProperty({ key: 'mp', value }))}
          />
          <EditableValue
            id={5}
            label="PW"
            value={calculatedStats.wp}
            onChange={(value) => dispatch(updateProperty({ key: 'wp', value }))}
          />
          <TotalMasteriesCalcul
            selectedMasteries={selectedMasteries}
            onChange={setSelectedMasteries}
          />
        </div>
        <div className="armorStats">
          <div className="elements">
            <div className="element-row">
              <EditableValue
                id={6}
                label=""
                value={calculatedStats.elems.waterMastery}
                onChange={(value) => dispatch(updateMasteries({ waterMastery: value }))}
              />
              <EditableValue
                id={7}
                label=""
                value={calculatedStats.resists.waterResist}
                onChange={(value) => dispatch(updateResistances({ waterResist: value }))}
              />
              <EditableValue
                id={8}
                label=""
                value={calculatedStats.elems.earthMastery}
                onChange={(value) => dispatch(updateMasteries({ earthMastery: value }))}
              />
              <EditableValue
                id={9}
                label=""
                value={calculatedStats.resists.earthResist}
                onChange={(value) => dispatch(updateResistances({ earthResist: value }))}
              />
            </div>
            <div className="element-row">
              <EditableValue
                id={10}
                label=""
                value={calculatedStats.elems.airMastery}
                onChange={(value) => dispatch(updateMasteries({ airMastery: value }))}
              />
              <EditableValue
                id={11}
                label=""
                value={calculatedStats.resists.airResist}
                onChange={(value) => dispatch(updateResistances({ airResist: value }))}
              />
              <EditableValue
                id={12}
                label=""
                value={calculatedStats.elems.fireMastery}
                onChange={(value) => dispatch(updateMasteries({ fireMastery: value }))}
              />
              <EditableValue
                id={13}
                label=""
                value={calculatedStats.resists.fireResist}
                onChange={(value) => dispatch(updateResistances({ fireResist: value }))}
              />
            </div>
          </div>

          <div className="armor-summary">
            <EditableValue
              id={14}
              label="Armure Reçue"
              value={classInfo.armorReceived}
              onChange={(value) => dispatch(updateProperty({ key: 'armorReceived', value }))}
            />
            <EditableValue
              id={15}
              label="Armure Donnée"
              value={classInfo.armorGiven}
              onChange={(value) => dispatch(updateProperty({ key: 'armorGiven', value }))}
            />
          </div>
        </div>
        <div className="abilities">
          <EditableValue
            id={16}
            label="Domm. Infligés"
            value={calculatedStats.damageDealt}
            onChange={(value) => dispatch(updateProperty({ key: 'damageDealt', value }))}
          />
          <EditableValue
            id={17}
            label="Soins Réalisés"
            value={calculatedStats.healMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'heals', value }))}
          />
          <EditableValue
            id={18}
            label="Coup Crit."
            value={calculatedStats.critical}
            onChange={(value) => dispatch(updateProperty({ key: 'critical', value }))}
          />
          <EditableValue
            id={19}
            label="Parade"
            value={calculatedStats.block}
            onChange={(value) => dispatch(updateProperty({ key: 'block', value }))}
          />
          <EditableValue
            id={20}
            label="Initiative"
            value={calculatedStats.initiative}
            onChange={(value) => dispatch(updateProperty({ key: 'initiative', value }))}
          />
          <EditableValue
            id={21}
            label="Portée"
            value={calculatedStats.range}
            onChange={(value) => dispatch(updateProperty({ key: 'range', value }))}
          />
          <EditableValue
            id={22}
            label="Esquive"
            value={calculatedStats.dodge}
            onChange={(value) => dispatch(updateProperty({ key: 'dodge', value }))}
          />
          <EditableValue
            id={23}
            label="Tacle"
            value={calculatedStats.lock}
            onChange={(value) => dispatch(updateProperty({ key: 'lock', value }))}
          />
          <EditableValue
            id={24}
            label="Sagesse"
            value={classInfo.wisdom}
            onChange={(value) => dispatch(updateProperty({ key: 'wisdom', value }))}
          />
          <EditableValue
            id={25}
            label="Prospection"
            value={classInfo.prospecting}
            onChange={(value) => dispatch(updateProperty({ key: 'prospecting', value }))}
          />
          <EditableValue
            id={26}
            label="Contrôle"
            value={calculatedStats.control}
            onChange={(value) => dispatch(updateProperty({ key: 'control', value }))}
          />
          <EditableValue
            id={27}
            label="Volonté"
            value={calculatedStats.will}
            onChange={(value) => dispatch(updateProperty({ key: 'will', value }))}
          />
        </div>
        <div className="masteries">
          <EditableValue
            id={28}
            label="Maîtrise Critique"
            value={calculatedStats.critMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'critMastery', value }))}
          />
          <EditableValue
            id={29}
            label="Résistance Critique"
            value={calculatedStats.critResist}
            onChange={(value) => dispatch(updateProperty({ key: 'critResist', value }))}
          />
          <EditableValue
            id={30}
            label="Maîtrise Dos"
            value={calculatedStats.rearMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'rearMastery', value }))}
          />
          <EditableValue
            id={31}
            label="Résistance Dos"
            value={calculatedStats.rearResist}
            onChange={(value) => dispatch(updateProperty({ key: 'rearResist', value }))}
          />
          <EditableValue
            id={32}
            label="Maîtrise Mêlée"
            value={calculatedStats.meleeMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'meleeMastery', value }))}
          />
          <EditableValue
            id={33}
            label="Maîtrise Distance"
            value={calculatedStats.distanceMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'distanceMastery', value }))}
          />
          <EditableValue
            id={34}
            label="Maîtrise Soin"
            value={calculatedStats.healMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'healMastery', value }))}
          />
          <EditableValue
            id={35}
            label="Maîtrise Berserk"
            value={calculatedStats.berserkMastery}
            onChange={(value) => dispatch(updateProperty({ key: 'berserkMastery', value }))}
          />
        </div>
      </section>
    </div>
  );
};

export default ClassInformations;
