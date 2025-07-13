import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page404() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-zinc-900">
            <div className="container max-w-4xl flex flex-col md:flex-row items-center gap-16">
                <img
                    src="/pageErro1.svg"
                    alt="Ilustração erro 404"
                    className="w-80 max-w-full object-contain animate-fadeIn"
                />
                <section className="max-w-md text-center md:text-left space-y-6">
                    <h1 className="montserrat text-7xl font-extrabold tracking-tight select-none text-zinc-800 ">
                        404
                    </h1>
                    <h2 className="roboto scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Ops! Página não encontrada
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        A página que você está tentando acessar não existe, foi removida ou está temporariamente indisponível.
                    </p>
                    <Button
                        asChild
                        className="inline-flex items-center gap-2 text-white font-semibold shadow-lg"
                    >
                        <Link href="/">
                            <ArrowLeft size={20} />
                            Voltar para a página inicial
                        </Link>
                    </Button>

                </section>
            </div>
        </main>
    );
}
