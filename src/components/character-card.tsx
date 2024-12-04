import React from 'react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{character.name}</h3>
        <p className="text-gray-600 mb-4">{character.description}</p>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-semibold">Primera aparición:</span>{' '}
            {character.firstAppearance}
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">Habilidades:</h4>
            <div className="flex flex-wrap gap-2">
              {character.abilities.map((ability) => (
                <span
                  key={ability}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}