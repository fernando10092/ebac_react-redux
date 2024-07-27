// reducers/adicionado.ts
import { createSlice } from '@reduxjs/toolkit'

// DEFININDO TIPO
interface MensagemState {
  msg: string
}

// DEFINIR ESTADO INICIAL
const initialState: MensagemState = {
  msg: '+ Adicionar aos favoritos'
}

// CRIAR O SLICE
const mensagemSlice = createSlice({
  name: 'mensagem',
  initialState,
  reducers: {
    alternar: (state) => {
      state.msg =
        state.msg === '+ Adicionar aos favoritos'
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'
    }
  }
})

export const { alternar } = mensagemSlice.actions
export default mensagemSlice.reducer
