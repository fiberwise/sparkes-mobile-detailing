// logo.jsx — Sparkes lockup using the real logo PNG.

function SparkesLogo({ className = "", style }) {
  return (
    <img
      src="assets/sparkes-logo.png"
      alt="Sparkes"
      className={"sparkes-logo " + className}
      style={style}
      draggable="false"
    />
  );
}

function SparkesLockup() {
  return (
    <div className="lockup">
      <SparkesLogo />
      <div className="lockup-sub">
        <span className="bar" />
        <span>Mobile Detailing</span>
        <span className="bar" />
      </div>
    </div>
  );
}

window.SparkesLogo = SparkesLogo;
window.SparkesLockup = SparkesLockup;
