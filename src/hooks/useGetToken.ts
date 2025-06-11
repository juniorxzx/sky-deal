"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/axios";

const TOKEN_KEY = "token";
const TOKEN_EXPIRE_KEY = "token_expire";

export function useGetToken() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const createToken = async () => {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedExpire = localStorage.getItem(TOKEN_EXPIRE_KEY);
      const now = new Date().getTime();

      if (storedToken && storedExpire && now < Number(storedExpire)) {
        setToken(storedToken);
        return;
      }

      try {
        const response = await api.get("/negociacao/token", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_SECRET}`,
          },
        });

        const token = response.data.token;

        if (token) {
          const expire = new Date().getTime() + 15 * 60 * 1000; // 15 minutos em ms

          localStorage.setItem(TOKEN_KEY, token);
          localStorage.setItem(TOKEN_EXPIRE_KEY, expire.toString());
          setToken(token);
        }
      } catch (error) {
        console.error("Erro ao gerar token:", error);
      }
    };

    createToken();
  }, []);

  return token;
}
