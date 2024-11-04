import React from 'react';
import type { Consultant } from '../types';
import { Share2 } from 'lucide-react';

interface Props {
  consultant: Consultant;
}

export default function ProfilePreview({ consultant }: Props) {
  const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/book/${consultant.bookingLink}`);
    alert('Booking link copied to clipboard!');
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
        {consultant.avatarUrl && (
          <img
            src={consultant.avatarUrl}
            alt={consultant.name}
            className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-white object-cover"
          />
        )}
      </div>
      
      <div className="mt-12 px-4 py-5 sm:px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{consultant.name}</h3>
          <p className="text-sm font-medium text-gray-600">{consultant.title}</p>
        </div>

        <div className="mt-6">
          <div className="text-sm text-gray-500">
            <p className="whitespace-pre-wrap">{consultant.bio}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {consultant.expertise.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Hourly Rate</h4>
          <p className="mt-1 text-2xl font-semibold text-blue-600">${consultant.hourlyRate} USD</p>
        </div>

        <div className="mt-6">
          <button
            onClick={copyLink}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Share2 size={16} />
            Share Booking Link
          </button>
        </div>
      </div>
    </div>
  );
}