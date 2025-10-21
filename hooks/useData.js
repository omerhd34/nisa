"use client";
import { useState, useEffect } from "react";

export function useData(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/data/${endpoint}`);

        if (!response.ok) {
          throw new Error(`API çağrısı başarısız: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error(`Veritabanından ${endpoint} verisi alınamadı:`, err);
        setData(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export function useAllData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const endpoints = [
          "home",
          "about",
          "work",
          "articles",
          "contact",
          "footer",
        ];
        const promises = endpoints.map((endpoint) =>
          fetch(`/api/data/${endpoint}`).then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
            }
            return res.json();
          })
        );

        const results = await Promise.all(promises);

        const combinedData = {
          home: results[0],
          about: results[1],
          work: results[2],
          articles: results[3],
          contact: results[4],
          footer: results[5],
        };

        setData(combinedData);
        setError(null);
      } catch (err) {
        console.error("Veritabanından veriler alınamadı:", err);
        setData(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  return { data, loading, error };
}
