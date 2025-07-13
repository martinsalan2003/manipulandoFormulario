//componetns shadcn
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
} from "../../components/ui/select"

//components criado por mim
import IconeHome from "../../components/communs/IconeHome";

export default function register() {
  return (
    
    <section className="h-screen flex justify-center items-center">
        <IconeHome />
       <div className="w-full max-w-2xl shadow-2xl rounded-2xl border border-gray-200 p-10 ">
        <h1 className="montisserat text-4xl text-center font-semibold mb-4">Cadastro</h1>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Label className="text-sm">Nome</Label>
              <Input placeholder="Nome" className="mt-1"></Input>
            </div>
            <div className="">
              <Label className="text-sm">Sobrenome</Label>
              <Input placeholder="Sobre Nome" className="mt-1"></Input>
            </div>
          </div>

          <div >
            <div>
              <Label className="text-sm">E-mail</Label>
              <Input  className="mt-1" placeholder="Email"></Input>
            </div>
          </div>
           <div>
             <Label className="text-sm">Usuario</Label>
          <div className="grid grid-cols-2 gap-4">
           <div>
            <Input placeholder="Nome de usuario"></Input>
           </div>
           <div>
             <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Sexo"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Homem">Homem</SelectItem>
                  <SelectItem value="Mulher">Mulher</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
           </div>
          </div>
           </div>

          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <Label className="text-sm">Senha</Label>
              <Input  className="mt-1"></Input>
            </div>
            <div className="">
              <Label className="text-sm">Confirmar Senha</Label>
              <Input className="mt-1"></Input>
            </div>
          </div>
          <Button type="submit" className="cursor-pointer">Cadastrar</Button>
        </form>

       </div>

    
    </section>
  );
}
