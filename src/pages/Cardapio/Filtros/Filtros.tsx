import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";

type IOpcao = typeof filtros[0];
interface props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros(props: props) {
  function selecionarFiltro(opcao: IOpcao) {
    if (props.filtro == opcao.id) {
      return props.setFiltro(null);
    }
    return props.setFiltro(opcao.id);
  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={`${styles.filtros__filtro} ${
            props.filtro == opcao.id ? styles["filtros__filtro--ativo"] : ""
          }`}
          key={opcao.id}
          onClick={() => {
            selecionarFiltro(opcao);
          }}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
