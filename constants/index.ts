export const env = process.env.NODE_ENV;
export const url =
  env === "development"
    ? "http://localhost:3000/api/data"
    : "https://remoto.vercel.app/api/data";
