import styles from "./Filtros.module.scss";
import filtros from "./filtros.json";
import classNames from "classnames";

type IOpcao = typeof filtros[0];
interface props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros(props: props) {
  function selecionarFiltro(opcao: IOpcao) {
    if (props.filtro === opcao.id) {
      return props.setFiltro(null);
    }
    return props.setFiltro(opcao.id);
  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            // with classnames package
            // when creating object keys, if it is surrounded by brackets,
            //  the key value will be the value of what's inside brackets
            // otherwise, it will just be the value itself
            // eg: here without brackets, the key would be "styles.filtros__filtro"
            [styles.filtros__filtro] : true,
            [styles["filtros__filtro--ativo"]] : props.filtro === opcao.id
          })}
        //   default way to do this
        //   className={`${styles.filtros__filtro} ${
        //     props.filtro == opcao.id ? styles["filtros__filtro--ativo"] : ""
        //   }`}
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
