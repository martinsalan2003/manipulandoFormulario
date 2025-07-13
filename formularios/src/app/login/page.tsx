'use client';

//navegação next
import Link from "next/link";

//components
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import IconeHome from "../../components/communs/IconeHome";

 
export default function login() {
  return (
    <section className="h-screen flex justify-center items-center ">

    <IconeHome />

      <div className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-200 p-10 ">
          <h1 className="montisserat text-4xl text-center font-semibold mb-4">Login</h1>        
        <form className="flex flex-col gap-4" >
          <div>
          <Label className="text-sm">Nome de usuario ou email</Label>
          <Input placeholder="Usuario" className="mt-1" type="text"></Input>
        </div>
        <div>
          <Label className="text-sm">Senha</Label>
          <Input placeholder="Senha" className="mt-1" type="password"></Input>
        </div>
        <div className="flex justify-between w-full">
           <div className="flex items-center gap-2">
              <Checkbox id="terms" className="border border-zinc-300 cursor-pointer" />
              <Label htmlFor="terms">Lembrar</Label>
            </div>

            <div>
              <Link href='/' className="text-sm ">Esqueci minha senha</Link>
            </div>
        </div>
        <Button className="cursor-pointer" type="submit" >Entrar</Button>
        </form>
      </div>
    </section>
  );
}
