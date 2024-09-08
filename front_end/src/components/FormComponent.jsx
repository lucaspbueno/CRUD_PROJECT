import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { postData } from "@/utils/fetchData";
import InputComponent from "./InputComponent";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import Alert from "./Alert";

// Defina o esquema de validação com Zod
const schema = z.object({
  tp_equipment: z.string().min(1, "Tipo do equipamento é obrigatório"),
  nm_manufacturer: z.string().min(1, "Nome do fabricante é obrigatório"),
  nm_model: z.string().min(1, "Nome do modelo é obrigatório"),
  nr_serial: z.string().min(1, "Número de série é obrigatório"),
  dt_purchase: z.string().nonempty("Data da compra é obrigatória"),
  vl_purchase: z.number().min(0, "Valor da compra deve ser positivo"),
});

function FormComponent({ setShouldFetchData, btnRegister, btnClose }) {
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');

  // Utilize o esquema de validação com react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const formFields = [
    { label: 'Tipo', name: 'tp_equipment', description: 'Tipo do equipamento.', type: 'text' },
    { label: 'Fabricante', name: 'nm_manufacturer', description: 'Nome do fabricante.', type: 'text' },
    { label: 'Modelo', name: 'nm_model', description: 'Nome do modelo.', type: 'text' },
    { label: 'Número de série', name: 'nr_serial', description: 'Número de série do equipamento.', type: 'text' },
    { label: 'Data da compra', name: 'dt_purchase', description: 'Data da compra do equipamento.', type: 'date' },
    { label: 'Valor da compra', name: 'vl_purchase', description: 'Valor de compra do equipamento.', type: 'number' },
  ];

  const urlPostEquipments = 'http://localhost:8000/api/v1/equipment/';

  const onSubmit = async (values) => {
    try {
      console.log(values);
      await postData(urlPostEquipments, values);
      setShouldFetchData(true);
    } catch (err) {
      setMessage(err.message);
      setShowError(true);
      console.error('Erro ao enviar dados:', err.message);
    } finally {
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const handleClick = (btnRef) => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {formFields.map((field, index) => (
        <InputComponent
          key={index}
          field={field}
          register={register}
          error={errors[field.name]} // Passe os erros para o componente InputComponent
        />
      ))}

      <section className="col-span-full flex gap-2 justify-end">
        <ButtonPrimary
          type="submit"
          text="Cadastrar"
          onClick={() => handleClick(btnRegister)}
        />

        <button
          type="button"
          onClick={() => handleClick(btnClose)}
          className="btn btn-outline btn-neutral"
        >
          Cancelar
        </button>
      </section>

      {showError && <Alert message={message} />}
    </form>
  );
}

export default FormComponent;
