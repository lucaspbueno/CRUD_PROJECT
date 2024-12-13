import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import ButtonPrimary from "./ButtonPrimary"
import FormComponent from "./FormComponent"
import Wrapper from "./Wrapper"
import { useRef } from "react"

function OffCanvas({ setShouldFetchData }) {
  const btnRegister = useRef(null)
  const btnClose = useRef(null)

  return (
    <Drawer>

      <DrawerTrigger>
        <ButtonPrimary text="Adicionar" />
      </DrawerTrigger>

      <DrawerContent className="min-h-[50vh] max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh]">

        <DrawerHeader>
          <DrawerTitle>Deseja adicionar um novo equipamento?</DrawerTitle>
          <DrawerDescription>Use esse formulário para isso.</DrawerDescription>
        </DrawerHeader>

        <Wrapper>
          <FormComponent
            setShouldFetchData={setShouldFetchData}
            btnRegister={btnRegister}
            btnClose={btnClose}
          />
        </Wrapper>

        <DrawerFooter className="hidden">
          <button ref={btnRegister}>Submit</button>
          <DrawerClose>
            <button ref={btnClose} className="btn btn-neutral">Neutral</button>
          </DrawerClose>
        </DrawerFooter>

      </DrawerContent>

    </Drawer>
  )
}

export default OffCanvas