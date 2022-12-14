import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import Buscador from "./Buscador/Buscador";
import styles from "./Cardapio.module.scss";
import Filtros from "./Filtros/Filtros";
import Itens from "./Itens/Itens";
import Ordenador from "./Ordenador/Ordenador";

export default function Cardapio() {
  const [busca, setBusca] = useState<string>("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
