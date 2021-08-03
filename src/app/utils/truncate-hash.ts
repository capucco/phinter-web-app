export const truncateHash = (hash: string) =>
  `${hash.substr(0, 6)}...${hash.substr(hash.length - 3, hash.length - 1)}`;
