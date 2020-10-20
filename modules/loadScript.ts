export default function loadScript(url) {
  const loadScriptPromise = new Promise((resolve, reject) => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = url;
    googleMapsScript.defer = true;
    googleMapsScript.onload = resolve;
    googleMapsScript.onerror = reject;

    document.head.appendChild(googleMapsScript);
  });

  return loadScriptPromise;
}
