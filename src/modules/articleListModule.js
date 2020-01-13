import { createSlice } from '@reduxjs/toolkit';

const articleListModule = createSlice({
  name: "articleList",
  initialState: {
    mainMenuList: ["1"],
    mainMenus: {
      "1": {
        id: "1",
        secondMenuList: [],
        thirdMenuList: [],
      }
    },

    articles: {
      "1": {
        id: "1",
        title: "",
        content: "",
      }
    },
    nextId: 2,
  },
  reducers: {
    addNewMainMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: ""
      };

      const newMainMenu = {
        id: newId,
        secondMenuList: [],
        thirdMenuList: [],
      }
      state.articles[newId] = newArticle;
      state.mainMenus[newId] = newMainMenu;
      state.mainMenuList.push(newId);
    },
    addNewSecondMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: "",
      };
      state.articles[newId] = newArticle;
      state.mainMenus[String(action.payload)].secondMenuList.push(newId);

    },
    addNewThirdMenu: (state, action) => {
      const newId = String(state.nextId++);
      const newArticle = {
        id: newId,
        title: "",
        content: "",
      }
      state.articles[newId] = newArticle;
      state.mainMenus[String(action.payload)].thirdMenuList.push(newId);

    },
    saveArticle: (state, action) => {
      state.articles[String(action.payload.id)].title = action.payload.title;
      state.articles[String(action.payload.id)].content = action.payload.content;
    },
    saveArticleTitle: (state, action) => {
      state.articles[String(action.payload.id)].title = action.payload.text;
    },
    saveArticleContent: (state, action) => {
      state.articles[String(action.payload.id)].content = action.payload.text;
    }
  }
});

export default articleListModule;