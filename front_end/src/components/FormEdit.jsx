import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { patchOrPutData } from "@/utils/fetchData"

const formSchema = z.object({
  tp_equipment: z.string().optional(),
  nm_manufacturer: z.string().optional(),
  nm_model: z.string().optional(),
  nr_serial: z.string().optional(),
  dt_purchase: z.string()
    .optional()
    .transform(val => {

      if (val) {
        const date = new Date(val);
        if (isNaN(date.getTime())) {
          throw new Error("Data inválida");
        }
        return date.toISOString();
      }

    }),
  vl_purchase: z.string()
    .optional()
    .transform(val => val && parseFloat(val))
});

function FormEdit({ setShouldFetchData, closeModal, setEditBtnIsDisabled, setDeleteBtnIsDisabled, selectedItems }) {

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
    {"label": 'Modelo', "name": 'nm_model', "description": 'Nome do modelo.', 'type': 'text'},
    {"label": 'Número de série', "name": 'nr_serial', "description": 'Número de série do equipamento.', 'type': 'text'},
    {"label": 'Data da compra', "name": 'dt_purchase', "description": 'Data da compra do equipamento.', 'type': 'date'},
    {"label": 'Valor da compra', "name": 'vl_purchase', "description": 'Valor de compra do equipamento.', 'type': 'number'},
  ]

  const urlPostEquipments = 'http://0.0.0.0:8000/api/v1/equipment/'

  const onSubmit = async (values) => {try {
      await patchOrPutData(`${urlPostEquipments}${selectedItems[0]}/`, values);
      setShouldFetchData(true)
      setDeleteBtnIsDisabled(true)
      setEditBtnIsDisabled(true)
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

        <section className="col-span-full">
          <button
              type="button"
              className="btn btn-outline btn-neutral"
              onClick={ closeModal }
            >
                Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary text-white ml-3"
            >
              Confirmar
            </button>
        </section>

      </form>
    </Form>
  )
}

export default FormEdit;