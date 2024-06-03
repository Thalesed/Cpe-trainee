import { z } from "zod";

export const validator = z.object({
  email: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 4 caracteres" })
    .max(100, { message: "No máximo 100 caracteres" }),
  senha: z
    .string({ required_error: "Obrigatório" })
    .min(8, { message: "No mínimo 8 caracteres" })
    .max(100, { message: "No máximo 100 caracteres" }),
  nome: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 4 caracteres" })
    .max(100, { message: "No máximo 100 caracteres" }),
  cargo: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 4 caracteres" })
    .max(100, { message: "No máximo 100 caracteres" }),
  status: z
    .string({ required_error: "Obrigatório" })
    .min(2, { message: "No mínimo 4 caracteres" })
    .max(100, { message: "No máximo 100 caracteres" }),
});
