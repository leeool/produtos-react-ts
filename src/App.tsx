import React from "react"
import ProductList from "./components/ProductList"
import UseFetch from "./hooks/UseFetch"
import styles from "./app.module.scss"
import "./global.module.scss"
import normalizeAPI from "./normalizeAPI"
import Estatisticas from "./Estatisticas"

const moedaBrasil = {
  style: "currency",
  currency: "BRL"
}

function App() {
  const { data, error } = UseFetch<ProductsAPI[]>(
    "https://ranekapi.origamid.dev/json/api/produto"
  )
  const [estatisticas, setEstatisticas] = React.useState<IEstatisticas>()

  React.useEffect(() => {
    if (data) {
      const produtos = data.map((item, index) => normalizeAPI(item, index))
      const produtosEstats = new Estatisticas(produtos)
      setEstatisticas(produtosEstats.estatisticas)
    }
  }, [data])

  if (error) return <h1>Algo deu errado. {error}</h1>
  return (
    <main className={styles.main}>
      <section className={styles.dados}>
        <h2>Estatísticas</h2>
        <ul>
          <li>
            Total:{" "}
            {estatisticas?.totalValores.toLocaleString("pt-BR", moedaBrasil)}
          </li>
          <li>
            Média dos valores:{" "}
            {estatisticas?.mediaValores.toLocaleString("pt-BR", moedaBrasil)}
          </li>
          <li>Quantidade de produtos: {estatisticas?.pQuantidade}</li>
          <li>Produtos disponíveis: {estatisticas?.pDisponiveis.length}</li>
          <li>Produtos indisponíveis: {estatisticas?.pIndisponiveis.length}</li>
          <li>
            Produto mais caro: {estatisticas?.pMaisCaro.name} (
            {estatisticas?.pMaisCaro.value.toLocaleString("pt-BR", moedaBrasil)}
            )
          </li>
          <li>
            Produtos mais barato: {estatisticas?.pMaisBarato.name} (
            {estatisticas?.pMaisBarato.value.toLocaleString(
              "pt-BR",
              moedaBrasil
            )}
            )
          </li>
        </ul>
      </section>
      <section className={styles.produtos}>
        <h2>Prateleira</h2>
        <ProductList data={data} />
      </section>
    </main>
  )
}

export default App
