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
  const [inputValue, setInputValue] = useState<string>(value.toString());
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

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
  }, [inputValue, value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    const numberValue = parseFloat(inputValue);
    if (!isNaN(numberValue) && numberValue !== value) {
      onChange(numberValue);
    }
    setIsEditing(false);
    setInputValue(value.toString());
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

  return (
    <div ref={containerRef} className="editable-value">
      {image && <img src={image.src} alt={image.alt} className="stat-icon" />}
      {label && (
        <span className="label">{label}</span>
      )}
      <div className="value-container">
        {!isEditing ? (
          <span className="value" onClick={handleValueClick}>{value}</span>
        ) : (
          <input
            ref={inputRef}
            type="number"
            className="number-input"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            placeholder={value.toString()}
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default EditableValue;
