export const randomGradient = () => `
  linear-gradient(
    135deg,
    rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)}),
    rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
  Math.random() * 255
)}, ${Math.floor(Math.random() * 255)})
  )
`;
