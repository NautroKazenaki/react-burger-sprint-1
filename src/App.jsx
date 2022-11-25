import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import State from './utils/data.js'

const App = () => {
  return (
    <div>
      <AppHeader />
      <BurgerIngredients data={State}/>
      <BurgerConstructor />
    </div>
  )
}

export default App

