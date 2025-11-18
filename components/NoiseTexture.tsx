export default function NoiseTexture() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: 'url(/images/noise-texture.png)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'left top',
        backgroundSize: '150px auto',
      }}
      aria-hidden="true"
    />
  );
}

