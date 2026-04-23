import { useEffect } from "react";

const FacebookPixel = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const loadFacebookPixel = () => {
        (function(window: Window, document: Document, scriptId: string) {
          const fbp = (window as any).fbp = (window as any).fbp || function() {
            ((window as any).fbp as any).q = ((window as any).fbp as any).q || [];
            ((window as any).fbp as any).q.push(arguments);
          };
          fbp('init', '1358034681882804');
          fbp('track', 'PageView');

          const script = document.createElement('script');
          script.id = scriptId;
          script.async = true;
          script.src = 'https://connect.facebook.net/en_US/fbevents.js';
          document.head.appendChild(script);
        })(window as any, document as any, 'fb-pixel-script');

        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = "https://www.facebook.com/tr?id=1358034681882804&ev=PageView&noscript=1";
        noscript.appendChild(img);
        document.body.appendChild(noscript);
      };

      if (document.readyState === 'complete') {
        setTimeout(loadFacebookPixel, 1000);
      } else {
        window.addEventListener('load', () => {
          setTimeout(loadFacebookPixel, 1000);
        });
      }
    }
  }, []);

  return null;
};

export default FacebookPixel;