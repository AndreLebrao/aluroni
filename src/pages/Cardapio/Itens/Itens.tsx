import { useEffect, useState } from "react";
import Item from "./Item/Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  // const {busca, filtro} = props

  function testarBusca(title: string) {
    const regex = new RegExp(props.busca, "i");
    return regex.test(title);
  }

  function testarFiltro(id: number) {
    if (props.filtro !== null) return props.filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testarBusca(item.title) && testarFiltro(item.category.id)
    );
    setLista(novaLista);
  }, [props.busca, props.filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
