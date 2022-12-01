import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

           const BurgerIngredientsTabs = () => {
                const [current, setCurrent] = React.useState('one')
                    return (
                        <div style={{ display: 'flex' }}>
                            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                                <p className="text text_type_main-small">Булки</p>
                            </Tab>
                            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                                <p className="text text_type_main-small">Соусы</p>
                            </Tab>
                            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                                <p className="text text_type_main-small">Начинки</p>
                            </Tab>
                        </div>
                    )
            }
        
    


export default BurgerIngredientsTabs
