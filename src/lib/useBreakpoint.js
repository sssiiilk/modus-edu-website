import { useState, useEffect } from 'react';

const QUERY_MOBILE = '(max-width: 767px)';
const QUERY_TABLET = '(max-width: 1023px)';

function getSnapshot() {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }
  const mobile = window.matchMedia(QUERY_MOBILE).matches;
  const tablet = window.matchMedia(QUERY_TABLET).matches;
  return {
    isMobile: mobile,
    isTablet: tablet && !mobile,
    isDesktop: !tablet,
  };
}

export function useBreakpoint() {
  const [bp, setBp] = useState(getSnapshot);

  useEffect(() => {
    const mqMobile = window.matchMedia(QUERY_MOBILE);
    const mqTablet = window.matchMedia(QUERY_TABLET);

    const update = () => setBp(getSnapshot());

    mqMobile.addEventListener('change', update);
    mqTablet.addEventListener('change', update);
    update();

    return () => {
      mqMobile.removeEventListener('change', update);
      mqTablet.removeEventListener('change', update);
    };
  }, []);

  return bp;
}
