// Color-coded styles for work / commission tags so each label is visually distinct.
export function getTagStyle(tag: string): string {
  const key = tag.toLowerCase();
  if (key.includes('popular')) return 'bg-gradient-to-r from-yellow-300 to-amber-400 text-fantasy-navy shadow-[0_0_15px_rgba(250,204,21,0.5)]';
  if (key.includes('new')) return 'bg-gradient-to-r from-emerald-400 to-lime-300 text-fantasy-navy shadow-[0_0_15px_rgba(52,211,153,0.5)]';
  if (key.includes('limited')) return 'bg-fantasy-crimson text-fantasy-white shadow-glow-crimson';
  if (key.includes('featured')) return 'bg-fantasy-purple text-fantasy-white shadow-glow-purple';
  if (key.includes('artist')) return 'bg-gradient-to-r from-blue-500 to-cyan-400 text-fantasy-white shadow-[0_0_15px_rgba(59,130,246,0.5)]';
  if (key.includes('hot')) return 'bg-gradient-to-r from-orange-500 to-amber-400 text-fantasy-navy shadow-[0_0_15px_rgba(249,115,22,0.5)]';
  return 'bg-fantasy-teal text-fantasy-navy shadow-glow-teal';
}
