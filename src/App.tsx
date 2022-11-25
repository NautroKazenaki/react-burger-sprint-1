import React from 'react'
import AppHeader from './components/AppHeader/AppHeader'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'

const App = () => {
  return (
    <div>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  )
}

export default App

