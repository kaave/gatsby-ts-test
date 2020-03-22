export type SectionLevel = number & { readonly __sectionLevel: unique symbol };
export function toSectionLevel(from: number): SectionLevel {
  if (from < 1 || 6 < from) {
    throw new Error(`Invalid section level range: ${from}`);
  }

  return from as SectionLevel;
}

export function toNumber(from: SectionLevel): number {
  return from as number;
}
