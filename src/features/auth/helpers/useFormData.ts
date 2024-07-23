import { useState } from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState<{ name: string; email: string; password: string } | null>(null);

  const saveFormData = (data: { name: string; email: string; password: string }) => {
    setFormData(data);
    console.log("Form Data:", data);
  };

  return {
    formData,
    saveFormData,
  };
};

export default useFormData;
