import store from './store'
import loadUI from './ui'
import {addRecipe, fetchRecipes} from './actions/recipes'
import {addIngredient} from './actions/ingredients'


loadUI()
store.dispatch(fetchRecipes())