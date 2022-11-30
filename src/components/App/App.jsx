import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import State from '../../utils/data.js'

const App = () => {
  return (
    <div>
      <AppHeader />
      <BurgerIngredients data={State}/>
      <BurgerConstructor data={State}/>
    </div>
  )
}

export default App

