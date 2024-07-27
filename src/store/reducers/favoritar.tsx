import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id == produto.id)) {
        alert('Item já nos favoritos')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
