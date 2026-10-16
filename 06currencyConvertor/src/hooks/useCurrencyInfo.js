import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const urls = [
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
    ];

    (async () => {
      for (const url of urls) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const json = await res.json();
            setData(json[currency] || {});
            return;
          }
        } catch (e) {
          console.error("Fetch failed:", url, e);
        }
      }
      console.error("Dono URLs fail ho gaye");
    })();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;