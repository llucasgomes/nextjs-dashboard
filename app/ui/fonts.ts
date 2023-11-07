import { Inter, Lusitana } from "next/font/google";

//especifique qual subconjunto você gostaria de carregar. Neste caso 'latin'
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
