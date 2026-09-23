// Color-coded styles for work / commission tags so each label is visually distinct.
export function getTagStyle(tag: string): string {
  const key = tag.toLowerCase();
  if (key.includes('popular')) return 'bg-fantasy-gold text-fantasy-navy shadow-glow-gold';
  if (key.includes('new')) return 'bg-emerald-400 text-fantasy-navy shadow-[0_0_15px_rgba(52,211,153,0.5)]';
  if (key.includes('limited')) return 'bg-fantasy-crimson text-fantasy-white shadow-glow-crimson';
  if (key.includes('featured')) return 'bg-fantasy-purple text-fantasy-white shadow-glow-purple';
  if (key.includes('artist')) return 'bg-fantasy-pink text-fantasy-navy shadow-[0_0_15px_rgba(244,154,177,0.5)]';
  return 'bg-fantasy-teal text-fantasy-navy shadow-glow-teal';
}
