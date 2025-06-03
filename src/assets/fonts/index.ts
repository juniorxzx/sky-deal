// src/app/fonts.ts (ou onde você colocou este código)

import localFont from "next/font/local";

// NENHUMA importação dos arquivos .ttf aqui

export const pfdinTextPro = localFont({
  src: [
    {
      path: "./PFDinTextPro-Thin.ttf", // Caminho relativo para o arquivo de fonte
      weight: "100",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./PFDinTextPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./PFDinTextPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PFDinTextPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-MedItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./PFDinTextPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-BoldItal.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./PFDinTextPro-XBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./PFDinTextPro-XBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-pfdin-text-pro",
});
