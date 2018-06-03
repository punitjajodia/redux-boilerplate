import {ADD_RECIPE, FETCH_RECIPES, SET_RECIPES} from '../constants/actionTypes'

export const addRecipe = (name) => {
	return {
		type: ADD_RECIPE, name
	}
}


export const fetchRecipes = () => {
    return {
        type: FETCH_RECIPES
    }
}

export const setRecipes = (recipes) => {
    return({
        type: SET_RECIPES,
        recipes
    })
}