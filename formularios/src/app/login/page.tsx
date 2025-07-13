'use client';

//navegação next
import Link from "next/link";

//components
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import IconeHome from "../../components/communs/IconeHome";

//hook utilizados da biblioteca hook form
import { useForm, Controller } from 'react-hook-form'

//importação do zod para ajudar na tipagem do typescript
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const schemaLogin = z.object({
  nomeUsuario: z.string().min(5, "Usuário deve ter no mínimo 5 caracteres"),
  senhaUsuario: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  lembrar: z.boolean().optional(),
});

type logindata = z.infer<typeof schemaLogin>

export default function Login() {

  function retornarDados(dados: logindata) {
    console.log(dados)
  }

  const { handleSubmit, control, formState } = useForm<logindata>({
    resolver: zodResolver(schemaLogin),
  });

  return (
    <section className="h-screen flex justify-center items-center ">

      <IconeHome />

      <div className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-200 p-10 ">
        <h1 className="montisserat text-4xl text-center font-semibold mb-4">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(retornarDados)}>

          <div>
            <Label className="text-sm">Nome de usuário ou email</Label>
            <Controller
              name="nomeUsuario"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input placeholder="Usuário" className="mt-1" type="text" {...field} />
              )}
            />
            {formState.errors.nomeUsuario?.message && (
              <span className="text-red-600 text-xs">{formState.errors.nomeUsuario.message}</span>
            )}
          </div>

          <div>
            <Label className="text-sm">Senha</Label>
            <Controller
              name="senhaUsuario"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input placeholder="Senha" className="mt-1" type="password" {...field} />
              )}
            />
            {formState.errors.senhaUsuario?.message && (
              <span className="text-red-600 text-xs">{formState.errors.senhaUsuario.message}</span>
            )}
          </div>

          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <Controller
                name="lembrar"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    id="terms"
                    className="border border-zinc-300 cursor-pointer"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="terms">Lembrar</Label>
            </div>
            <div>
              <Link href='/error' className="text-sm ">Esqueci minha senha</Link>
            </div>
          </div>

          <Button className="cursor-pointer" type="submit">Entrar</Button>
        </form>
      </div>
    </section>
  );
}
