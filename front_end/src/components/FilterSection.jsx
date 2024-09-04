import InputSearch from "./InputSearch"
import OffCanvas from "./OffCanvas"

function FilterSection() {
  return (
    <section className="flex justify-between mb-5">
      <InputSearch></InputSearch>
      <OffCanvas></OffCanvas>
    </section>
  )
}

export default FilterSection