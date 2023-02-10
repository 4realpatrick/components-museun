import { useEffect, useMemo, useState } from 'react';

export default function usePopup() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const mountNode = useMemo(() => {
    const node = document.createElement('div');
    return node;
  }, []);
  useEffect(() => {
    if (showPopup) {
      document.body.appendChild(mountNode);
      return () => {
        document.body.removeChild(mountNode);
      };
    }
  }, [showPopup]);

  return {
    showPopup,
    setShowPopup,
    mountNode,
  };
}
