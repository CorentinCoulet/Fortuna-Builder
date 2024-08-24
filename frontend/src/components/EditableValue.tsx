import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/EditableValue.scss';
import { PrimaryStats } from "../asset";

interface EditableValueProps {
  id: number;
  label: string | null;
  value: number;
  onChange: (value: number) => void;
}

const EditableValue: React.FC<EditableValueProps> = ({ id, label, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string>("0");
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasValidated, setHasValidated] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      handleInputBlur();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    const trimmedValue = inputValue.trim();
    const numberValue = parseFloat(trimmedValue);
    if (trimmedValue === "" || isNaN(numberValue)) {
      setInputValue("0");
      onChange(value);
    }
    if(numberValue !== 0 && !isNaN(numberValue)){
      setHasValidated(true);
    } else {
      setHasValidated(false);
    }
    setIsEditing(false);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleInputBlur();
    }
  };

  const handleValueClick = () => {
    setIsEditing(true);
  };

  const image = PrimaryStats[id];
  const accumulatedValue = value + parseFloat(inputValue);

  const containerClass = hasValidated ? 'editable-value outlined' : 'editable-value';

  return (
    <div ref={containerRef} className={containerClass}>
      {image && <img loading="lazy" src={image.src} alt={image.alt} className="stat-icon" />}
      {label && (
        <span className="label">{label}</span>
      )}
      <div className="value-container">
        {!isEditing ? (
          <span className="value" onClick={handleValueClick}>{accumulatedValue}</span>
        ) : (
          <input
            type="number"
            className="number-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default EditableValue;
