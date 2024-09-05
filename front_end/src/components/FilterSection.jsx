import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputSearch from "./InputSearch"
import OffCanvas from "./OffCanvas"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"

function FilterSection({ setShouldFetchData }) {
  return (
    <section className="flex justify-between mb-5">
      <InputSearch></InputSearch>
      <section className="flex gap-5">
        <button className="btn btn-outline btn-warning">
          <FontAwesomeIcon icon={faPen} />
        </button>

          <button className="btn btn-outline btn-error">
            <FontAwesomeIcon icon={faTrash} />
          </button>

        <OffCanvas setShouldFetchData={ setShouldFetchData }></OffCanvas>
      </section>
    </section>
  )
}

export default FilterSection