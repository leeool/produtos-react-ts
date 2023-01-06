interface Photo {
  src: string
  titulo: string
}

interface ProductsAPI {
  nome: string
  id: string
  preco: string
  vendido: string
  fotos: Photo[]
}

interface Products {
  name: string
  id: number
  value: number
  currency: string
  selled: boolean
  photo: Photo[]
}

interface IEstatisticas {
  mediaValores: number
  totalValores: number
  pDisponiveis: Products[]
  pIndisponiveis: Products[]
  pQuantidade: number
  pMaisCaro: Products
  pMaisBarato: Products
}
