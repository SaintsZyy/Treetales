export function Divider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      <span className="hairline flex-1" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="hairline flex-1" />
    </div>
  );
}
