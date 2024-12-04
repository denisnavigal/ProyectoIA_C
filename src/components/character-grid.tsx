import React from 'react';
import { CharacterCard } from './character-card';
import type { Character } from '../types';

interface CharacterGridProps {
  title: string;
  characters: Character[];
}

export function CharacterGrid({ title, characters }: CharacterGridProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}