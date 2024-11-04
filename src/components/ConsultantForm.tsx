import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { ConsultantFormData } from '../types';

interface Props {
  onSubmit: (data: ConsultantFormData) => void;
}

export default function ConsultantForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<ConsultantFormData>({
    name: '',
    title: '',
    bio: '',
    hourlyRate: 100,
    expertise: [],
    avatarUrl: '',
  });
  const [expertiseInput, setExpertiseInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addExpertise = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && expertiseInput.trim()) {
      e.preventDefault();
      setFormData(prev => ({
        ...prev,
        expertise: [...prev.expertise, expertiseInput.trim()]
      }));
      setExpertiseInput('');
    }
  };

  const removeExpertise = (index: number) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Professional Title
        </label>
        <input
          type="text"
          id="title"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.title}
          onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Professional Bio
        </label>
        <textarea
          id="bio"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.bio}
          onChange={e => setFormData(prev => ({ ...prev, bio: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">
          Hourly Rate (USD)
        </label>
        <input
          type="number"
          id="hourlyRate"
          required
          min="1"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.hourlyRate}
          onChange={e => setFormData(prev => ({ ...prev, hourlyRate: Number(e.target.value) }))}
        />
      </div>

      <div>
        <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700">
          Profile Picture URL
        </label>
        <input
          type="url"
          id="avatarUrl"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.avatarUrl}
          onChange={e => setFormData(prev => ({ ...prev, avatarUrl: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">
          Areas of Expertise (Press Enter to add)
        </label>
        <input
          type="text"
          id="expertise"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={expertiseInput}
          onChange={e => setExpertiseInput(e.target.value)}
          onKeyDown={addExpertise}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.expertise.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
            >
              {item}
              <button
                type="button"
                onClick={() => removeExpertise(index)}
                className="ml-1 inline-flex items-center rounded-full p-0.5 text-blue-800 hover:bg-blue-200 hover:text-blue-900"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Profile
      </button>
    </form>
  );
}