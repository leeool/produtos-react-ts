class Estatisticas {
  produtos
  estatisticas: IEstatisticas
  constructor(produtos: Products[]) {
    this.produtos = produtos
    this.estatisticas = this.getEstatisticas()
  }
  private setTotal() {
    return this.produtos.reduce((acc, item) => acc + item.value, 0)
  }
  private setMedia() {
    const total = this.setTotal()
    const media = total / this.produtos.length
    return media
  }

  private setDisponibilidade() {
    const indisponiveis = this.produtos.filter((produto) => produto.selled)
    const disponiveis = this.produtos.filter((produto) => !produto.selled)
    return [indisponiveis, disponiveis]
  }
  private setQuantidade() {
    const quantidade = this.produtos.length
    return quantidade
  }
  private setBaratoECaro() {
    const baratoECaro = this.produtos.sort((a, b) => a.value - b.value)
    const [caro, barato] = [baratoECaro[baratoECaro.length - 1], baratoECaro[0]]

    return [caro, barato]
  }
  private getEstatisticas(): IEstatisticas {
    return {
      mediaValores: this.setMedia(),
      totalValores: this.setTotal(),
      pDisponiveis: this.setDisponibilidade()[1],
      pIndisponiveis: this.setDisponibilidade()[0],
      pQuantidade: this.setQuantidade(),
      pMaisCaro: this.setBaratoECaro()[0],
      pMaisBarato: this.setBaratoECaro()[1]
    }
  }
}

export default Estatisticas
