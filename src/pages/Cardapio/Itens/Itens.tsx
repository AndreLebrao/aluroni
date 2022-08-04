import cardapio from "./itens.json";
import styles from "./Itens.module.scss";
import Item from './Item/Item';

export default function Itens() {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} />
      ))}
    </div>
  );
}
