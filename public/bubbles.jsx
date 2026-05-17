// bubbles.jsx — animated soap-bubble field rising from the logo.

function BubbleField({ density = 24, popChance = 0.25, area = "hero" }) {
  // memoize a stable bubble seed list per density
  const bubbles = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < density; i++) {
      const size = 8 + Math.random() * 60;
      const left = Math.random() * 100;
      const dur = 9 + Math.random() * 10;
      const delay = -Math.random() * dur;
      const drift = (Math.random() * 80 - 40);
      const pop = Math.random() < popChance;
      out.push({ size, left, dur, delay, drift, pop, id: i });
    }
    return out;
  }, [density, popChance]);

  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map(b => (
        <span
          key={b.id}
          className={"bubble" + (b.pop ? " pop" : "")}
          style={{
            width: b.size + "px",
            height: b.size + "px",
            left: b.left + "%",
            "--dur": b.dur + "s",
            "--delay": b.delay + "s",
            "--drift": b.drift + "px",
          }}
        />
      ))}
    </div>
  );
}

window.BubbleField = BubbleField;
