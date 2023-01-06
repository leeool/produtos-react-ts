const normalizeAPI = (data: ProductsAPI, id: number): Products => {
  return {
    name: data.nome,
    id: id + 1,
    value: Number(data.preco),
    currency: Number(data.preco).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }),
    selled: data.vendido === "false" ? false : true,
    photo: data.fotos
  }
}

export default normalizeAPI
