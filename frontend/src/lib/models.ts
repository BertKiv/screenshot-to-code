// Keep in sync with backend (llm.py)
// Order here matches dropdown order
export enum CodeGenerationModel {
    GPT_4O_2024_05_13 = "gpt-4o-2024-05-13",
    GPT_4_VISION = "gpt-4-1106-vision-preview",
    GPT_4_TURBO_2024_04_09 = "gpt-4-turbo-2024-04-09",
    GPT_35_TURBO_1106 = "gpt-3.5-turbo-1106",
    GEMINI_15_PRO_LATEST = "gemini-1.5-pro-latest",
    SHUTTLE_2_TURBO = "shuttle-2-turbo"
}

// Will generate a static error if a model in the enum above is not in the descriptions
export const CODE_GENERATION_MODEL_DESCRIPTIONS: {
  [key in CodeGenerationModel]: { name: string; inBeta: boolean };
} = {
  "gpt-4o-2024-05-13": { name: "GPT-4o 🌟", inBeta: false },
  "gpt-4-turbo-2024-04-09": { name: "GPT-4 Turbo (Apr 2024)", inBeta: false },
  "gpt-4-1106-vision-preview": { name: "GPT-4 Vision (Nov 2023)", inBeta: false },
  "shuttle-2-turbo": { name: "SHUTTLE 2 TURBO", inBeta: false },
  "gpt-3.5-turbo-1106": { name: "GPT3.5 TURBO (1106)", inBeta: false },
  "gemini-1.5-pro-latest": { name: "GEMINI 1.5 PRO LATEST", inBeta: false }
};
