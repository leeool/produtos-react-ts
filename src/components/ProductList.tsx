import React from "react"
import normalizeAPI from "../normalizeAPI"
import styles from "./ProductList.module.scss"

function ProductList({ data }: { data: ProductsAPI[] | null }) {
  const [produtos, setProdutos] = React.useState<Products[]>()

  React.useEffect(() => {
    if (data) {
      const produtos = data.map((item, index) => normalizeAPI(item, index))
      setProdutos(produtos)
    }
  }, [data])

  if (!produtos) return null
  return (
    <ul className={styles.lista}>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <img src={produto.photo[0].src} alt={produto.photo[0].titulo} />
          <h2>{produto.name}</h2>
          <p>{produto.currency}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
