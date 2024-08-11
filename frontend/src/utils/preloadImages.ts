import { CommonSpells } from '../../scripts/generateSpellsImports';

export interface Spell {
    src: string;
    alt: string;
}

export interface SpellsCategory {
    [key: string]: Spell;
}

export interface Spells {
    [key: string]: SpellsCategory;
}

const extractImageUrls = (spells: Spells): string[] => {
    return Object.values(spells).flatMap(spellType =>
        Object.values(spellType).map(spell => spell.src)
    );
};

const preloadImages = (spells: Spells) => {
    const imageUrls = extractImageUrls(spells);
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

export const preloadAllImages = () => {
    preloadImages(CommonSpells);
};
