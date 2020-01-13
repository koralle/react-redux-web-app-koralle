import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import articleListModule from './modules/articleListModule';
import editArticleModule from './modules/editArticleModule';

// rootReducer
const rootReducer = combineReducers({
  articleList: articleListModule.reducer,
  editArticle: editArticleModule.reducer,
});

export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store
}
