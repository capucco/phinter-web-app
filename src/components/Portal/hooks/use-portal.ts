import { useEffect, useRef, useState } from 'react';

const createRootElement = (id: string) => {
  const root = document.createElement('div');
  root.setAttribute('id', id);
  return root;
};

export const usePortal = (id: string): HTMLDivElement | null => {
  const [isMounted, setMounted] = useState<boolean>(false);
  const portalElement = useRef(document.createElement('div')).current;

  useEffect(() => {
    const existingParent = document.getElementById(id);
    const portalRootElement = existingParent || createRootElement(id);

    if (!existingParent) document.body.appendChild(portalRootElement);
    portalRootElement.appendChild(portalElement);
    setMounted(true);

    return () => {
      portalElement.parentElement.removeChild(portalElement);
      if (!portalRootElement.childNodes.length) {
        portalRootElement.parentElement.removeChild(portalRootElement);
      }
    };
  }, [id, portalElement]);

  return isMounted ? portalElement : null;
};
