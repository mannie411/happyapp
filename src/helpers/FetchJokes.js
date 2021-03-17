import { useState, useEffect, useCallback } from "react";

export const API_URL = "https://v2.jokeapi.dev/joke/";

export const FetchJokes = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      }
    };

    if (url) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, options]);

  const refetch = useCallback(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { ...options });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      }
    };
    fetchData();
  }, [url, options]);

  return [{ response, error, isLoading }, refetch];
};
