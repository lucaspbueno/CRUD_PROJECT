import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ButtonPrimary from "./ButtonPrimary"
import { DrawerClose } from "./ui/drawer"
import { postData } from "@/utils/fetchData"

const formSchema = z.object({
  tp_equipment: z.string().min(1, "Tipo é obrigatório"),
  nm_manufacturer: z.string().min(1, "Nome é obrigatório"),
  nm_modelo: z.string().min(1, "Nome é obrigatório"),
  nr_serie: z.string().min(1, "Número é obrigatório"),
  dt_purchase: z.string().min(1, "Data é obrigatória").transform(val => new Date(val)),
  vl_purchase: z.string().min(1, "Valor é obrigatório").transform(val => parseFloat(val))
});

function FormComponent() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    /* defaultValues: {
      tp_equipment: "",
      nm_manufacturer: "",
      nm_modelo: "",
      nr_serie: "",
      dt_purchase: "",
      vl_purchase: ""
    }, */
  })

  const formFields = [
    {"label": 'Tipo', "name": 'tp_equipment', "description": 'Tipo do equipamento.', 'type': 'text'},
    {"label": 'Fabricante', "name": 'nm_manufacturer', "description": 'Nome do fabricante.', 'type': 'text'},
    {"label": 'Modelo', "name": 'nm_modelo', "description": 'Nome do modelo.', 'type': 'text'},
    {"label": 'Número de série', "name": 'nr_serie', "description": 'Número de série do equipamento.', 'type': 'text'},
    {"label": 'Data da compra', "name": 'dt_purchase', "description": 'Data da compra do equipamento.', 'type': 'date'},
    {"label": 'Valor da compra', "name": 'vl_purchase', "description": 'Valor de compra do equipamento.', 'type': 'number'},
  ]

  
  const urlPostEquipments = 'http://localhost:8000/api/v1/equipments/'

  const onSubmit = async (values) => {try {
    const result = await postData(urlPostEquipments, values);
    console.log('Dados enviados com sucesso:', result);
  } catch (err) {
    console.error('Erro ao enviar dados:', err.message);
  }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          formFields.map(({label, name, description, type}, index) => (
            <FormField key={index} control={form.control} name={name} render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" type={type} {...field} />
                  </FormControl>
                  <FormDescription>
                    {description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))
        }

        <section className="col-span-full flex gap-2 justify-end">
          <ButtonPrimary type="submit" text="Cadastrar" />

          <DrawerClose>
            <button className="btn btn-outline btn-primary">Cancelar</button>
          </DrawerClose>
        </section>
        
      </form>
    </Form>
  )
}

export default FormComponent;