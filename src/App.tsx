import React, { useState } from 'react';
import ConsultantForm from './components/ConsultantForm';
import ProfilePreview from './components/ProfilePreview';
import type { Consultant, ConsultantFormData } from './types';
import { Sparkles } from 'lucide-react';

function App() {
  const [consultant, setConsultant] = useState<Consultant | null>(null);

  const handleSubmit = (data: ConsultantFormData) => {
    const newConsultant: Consultant = {
      ...data,
      id: crypto.randomUUID(),
      bookingLink: crypto.randomUUID(),
    };
    setConsultant(newConsultant);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create Your</span>
            <span className="block text-blue-600">Consulting Profile</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Share your expertise and start booking consultations in minutes
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Sparkles className="h-5 w-5 text-blue-600" />
              Create Your Profile
            </div>
            <ConsultantForm onSubmit={handleSubmit} />
          </div>

          <div className="lg:sticky lg:top-6">
            {consultant ? (
              <ProfilePreview consultant={consultant} />
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center">
                <div className="space-y-1">
                  <div className="text-gray-500">
                    Your profile preview will appear here
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;