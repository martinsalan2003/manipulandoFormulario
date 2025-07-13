import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl border border-gray-200">
        <CardHeader>
          <CardTitle className="montserrat scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
             Formulários com <span className="text-zinc-400 border-b-3 font-extrabold">Next.js</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="roboto leading-7 [&:not(:first-child)]:mt-6">
Atualmente, no meu trabalho como desenvolvedor front-end, tenho utilizado as tecnologias abaixo e estou me aprofundando nelas constantemente, pois acredito na importância de estar sempre atualizado e em evolução contínua na área
          </p>

           <blockquote className="mt-6 border-l-2 pl-6 italic text-sm">
Este projeto realiza a manipulação de dados e retorna as informações necessárias para executar uma requisição HTTP ou atender outras demandas da sua aplicação. Para fins de demonstração e testes, os dados processados podem ser visualizados diretamente no console do navegador.
          </blockquote>

          <div className="montserrat flex flex-wrap justify-center gap-4">
            <Badge variant="outline">React Hook Form</Badge>
            <Badge variant="default">TypeScript</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="default">Zod</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="default">ShadCN UI</Badge>
            <Badge variant="outline">FontAwsome</Badge>
            <Badge variant="default">UnDraw</Badge>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="roboto leading-7 [&:not(:first-child)]:mt-6">Acesse as páginas de formulário:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/register">
                <Button className="w-32 cursor-pointer">Cadastro</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-32 cursor-pointer">Login</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
