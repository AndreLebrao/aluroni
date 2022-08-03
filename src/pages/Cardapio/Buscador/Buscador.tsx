import sytles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador(props: props) {
  return (
    <div className={sytles.buscador}>
      <input
        value={props.busca}
        onChange={(evento) => props.setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D4E" />
    </div>
  );
}
