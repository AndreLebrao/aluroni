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

  function testarBusca(title: string) {
    const regex = new RegExp(props.busca, "i");
    return regex.test(title);
  }

  function testarFiltro(id: number) {
    if (props.filtro !== null) return props.filtro === id;
    return true;
  }

  function ordenar(lista:typeof cardapio) {
    switch (props.ordenador) {
      case 'porcao':
        return lista.sort((a,b)=>a.size>b.size ? 1 : -1)
        break;
      case 'qtd_pessoas':
        return lista.sort((a,b)=>a.serving>b.serving ? 1 : -1)
        break;
      case 'preco':
        return lista.sort((a,b)=>a.price>b.price ? 1 : -1)
        break;
    
      default:
        return lista
        break;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testarBusca(item.title) && testarFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [props.busca, props.filtro, props.ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
