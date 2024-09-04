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
import { Button } from "@/components/ui/button"
import ButtonPrimary from "./ButtonPrimary"
import FormComponent from "./FormComponent"
import Wrapper from "./Wrapper"

function OffCanvas() {
  return (
    <Drawer>

      <DrawerTrigger>
        <ButtonPrimary text="Adicionar" />
      </DrawerTrigger>

      <DrawerContent className="min-h-[50vh] max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] overflow-y-auto">

        <DrawerHeader>
          <DrawerTitle>Deseja adicionar um novo equipamento?</DrawerTitle>
          <DrawerDescription>Use esse formulário para isso.</DrawerDescription>
        </DrawerHeader>

        <Wrapper>
          <FormComponent />
        </Wrapper>

        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <button className="btn btn-neutral">Neutral</button>
          </DrawerClose>
        </DrawerFooter> */}

      </DrawerContent>

    </Drawer>
  )
}

export default OffCanvas