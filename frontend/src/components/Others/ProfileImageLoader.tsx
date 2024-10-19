import React, { useState } from 'react';

function ProfileImageLoader() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && (
        <div>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt="Selected" style={{ maxWidth: '300px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
}

export default ProfileImageLoader;
