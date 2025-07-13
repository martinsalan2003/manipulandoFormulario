'use client';

import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import IconeHome from "../../components/communs/IconeHome";

const schemaCadastro = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  usuario: z.string().min(3, "Usuário deve ter no mínimo 3 caracteres"),
  sexo: z.enum(["Homem", "Mulher", "Outro"], "Sexo é obrigatório"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  confirmarSenha: z.string().min(8, "Confirmação de senha deve ter no mínimo 8 caracteres"),
}).refine(data => data.senha === data.confirmarSenha, {
  message: "As senhas não conferem",
  path: ["confirmarSenha"], 
});

type CadastroData = z.infer<typeof schemaCadastro>;

export default function Register() {

  const { control, handleSubmit, formState: { errors } } = useForm<CadastroData>({
    resolver: zodResolver(schemaCadastro),
  });

  function retornarDados(dados: CadastroData) {
    console.log("Dados do formulário:", dados);
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <IconeHome />
      <div className="w-full max-w-2xl shadow-2xl rounded-2xl border border-gray-200 p-10 ">
        <h1 className="montisserat text-4xl text-center font-semibold mb-4">Cadastro</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(retornarDados)}>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm">Nome</Label>
              <Controller
                name="nome"
                control={control}
                defaultValue=""
                render={({ field }) => <Input placeholder="Nome" className="mt-1" type="text" {...field} />}
              />
              {errors.nome && <span className="text-red-600 text-xs">{errors.nome.message}</span>}
            </div>

            <div>
              <Label className="text-sm">Sobrenome</Label>
              <Controller
                name="sobrenome"
                control={control}
                defaultValue=""
                render={({ field }) => <Input placeholder="Sobrenome" className="mt-1" type="text" {...field} />}
              />
              {errors.sobrenome && <span className="text-red-600 text-xs">{errors.sobrenome.message}</span>}
            </div>
          </div>

          <div>
            <Label className="text-sm">E-mail</Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => <Input placeholder="Email" className="mt-1" type="email" {...field} />}
            />
            {errors.email && <span className="text-red-600 text-xs">{errors.email.message}</span>}
          </div>

          <div>
            <Label className="text-sm">Usuário</Label>
            <Controller
              name="usuario"
              control={control}
              defaultValue=""
              render={({ field }) => <Input placeholder="Nome de usuário" className="mt-1" type="text" {...field} />}
            />
            {errors.usuario && <span className="text-red-600 text-xs">{errors.usuario.message}</span>}
          </div>

          <div>
            <Label className="text-sm">Sexo</Label>
            <Controller
              name="sexo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sexo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Homem">Homem</SelectItem>
                      <SelectItem value="Mulher">Mulher</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.sexo && <span className="text-red-600 text-xs">{errors.sexo.message}</span>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm">Senha</Label>
              <Controller
                name="senha"
                control={control}
                defaultValue=""
                render={({ field }) => <Input placeholder="Senha" className="mt-1" type="password" {...field} />}
              />
              {errors.senha && <span className="text-red-600 text-xs">{errors.senha.message}</span>}
            </div>

            <div>
              <Label className="text-sm">Confirmar Senha</Label>
              <Controller
                name="confirmarSenha"
                control={control}
                defaultValue=""
                render={({ field }) => <Input placeholder="Confirmar Senha" className="mt-1" type="password" {...field} />}
              />
              {errors.confirmarSenha && <span className="text-red-600 text-xs">{errors.confirmarSenha.message}</span>}
            </div>
          </div>

          <Button type="submit" className="cursor-pointer">Cadastrar</Button>
        </form>
      </div>
    </section>
  );
}
