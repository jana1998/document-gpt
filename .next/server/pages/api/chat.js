"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings/openai":
/*!**********************************************!*\
  !*** external "langchain/embeddings/openai" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ "langchain/llms/openai":
/*!****************************************!*\
  !*** external "langchain/llms/openai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ "langchain/vectorstores/pinecone":
/*!**************************************************!*\
  !*** external "langchain/vectorstores/pinecone" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\r\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\r\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"rsmsalesforce\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLGlCQUFpQix3Q0FBd0M7QUFFakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncHQ0LWxhbmdjaGFpbi1wZGYtY2hhdGJvdC8uL2NvbmZpZy9waW5lY29uZS50cz82ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGFuZ2UgdGhlIG5hbWVzcGFjZSB0byB0aGUgbmFtZXNwYWNlIG9uIFBpbmVjb25lIHlvdSdkIGxpa2UgdG8gc3RvcmUgeW91ciBlbWJlZGRpbmdzLlxyXG4gKi9cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBQaW5lY29uZSBpbmRleCBuYW1lIGluIC5lbnYgZmlsZScpO1xyXG59XHJcblxyXG5jb25zdCBQSU5FQ09ORV9JTkRFWF9OQU1FID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfSU5ERVhfTkFNRSA/PyAnJztcclxuXHJcbmNvbnN0IFBJTkVDT05FX05BTUVfU1BBQ0UgPSAncnNtc2FsZXNmb3JjZSc7IC8vbmFtZXNwYWNlIGlzIG9wdGlvbmFsIGZvciB5b3VyIHZlY3RvcnNcclxuXHJcbmV4cG9ydCB7IFBJTkVDT05FX0lOREVYX05BTUUsIFBJTkVDT05FX05BTUVfU1BBQ0UgfTtcclxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9JTkRFWF9OQU1FIiwiRXJyb3IiLCJQSU5FQ09ORV9OQU1FX1NQQUNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings/openai */ \"langchain/embeddings/openai\");\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"langchain/vectorstores/pinecone\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history  } = req.body;\n    console.log(\"question\", question);\n    //only accept post requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    try {\n        const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n        /* create vectorstore*/ const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n            pineconeIndex: index,\n            textKey: \"text\",\n            namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n        });\n        //create chain\n        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore);\n        //Ask a question using chat history\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            error: error.message || \"Something went wrong\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDQztBQUNsQjtBQUNLO0FBQzBCO0FBRTlELGVBQWVNLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFLEdBQUdILElBQUlJLElBQUk7SUFFdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSjtJQUV4QiwyQkFBMkI7SUFDM0IsSUFBSUYsSUFBSU8sTUFBTSxLQUFLLFFBQVE7UUFDekJOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQjtRQUNuRDtJQUNGLENBQUM7SUFFRCxJQUFJLENBQUNSLFVBQVU7UUFDYixPQUFPRCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JWLFNBQVNXLElBQUksR0FBR0MsVUFBVSxDQUFDLE1BQU07SUFFM0QsSUFBSTtRQUNGLE1BQU1DLFFBQVFuQixrRUFBYyxDQUFDQyxpRUFBbUJBO1FBRWhELHFCQUFxQixHQUNyQixNQUFNb0IsY0FBYyxNQUFNdkIsNEZBQStCLENBQ3ZELElBQUlELHlFQUFnQkEsQ0FBQyxDQUFDLElBQ3RCO1lBQ0UwQixlQUFlSjtZQUNmSyxTQUFTO1lBQ1RDLFdBQVd2QixpRUFBbUJBO1FBQ2hDO1FBR0YsY0FBYztRQUNkLE1BQU13QixRQUFRM0IsMkRBQVNBLENBQUNzQjtRQUN4QixtQ0FBbUM7UUFDbkMsTUFBTU0sV0FBVyxNQUFNRCxNQUFNRSxJQUFJLENBQUM7WUFDaEN0QixVQUFVVTtZQUNWYSxjQUFjdEIsV0FBVyxFQUFFO1FBQzdCO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZaUI7UUFDeEJ0QixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDYztJQUN2QixFQUFFLE9BQU9iLE9BQVk7UUFDbkJMLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSTtRQUNyQlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNQyxPQUFPLElBQUk7UUFBdUI7SUFDeEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi9wYWdlcy9hcGkvY2hhdC50cz9jNTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSAnbGFuZ2NoYWluL2VtYmVkZGluZ3Mvb3BlbmFpJztcclxuaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gJ2xhbmdjaGFpbi92ZWN0b3JzdG9yZXMvcGluZWNvbmUnO1xyXG5pbXBvcnQgeyBtYWtlQ2hhaW4gfSBmcm9tICdAL3V0aWxzL21ha2VjaGFpbic7XHJcbmltcG9ydCB7IHBpbmVjb25lIH0gZnJvbSAnQC91dGlscy9waW5lY29uZS1jbGllbnQnO1xyXG5pbXBvcnQgeyBQSU5FQ09ORV9JTkRFWF9OQU1FLCBQSU5FQ09ORV9OQU1FX1NQQUNFIH0gZnJvbSAnQC9jb25maWcvcGluZWNvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxyXG4pIHtcclxuICBjb25zdCB7IHF1ZXN0aW9uLCBoaXN0b3J5IH0gPSByZXEuYm9keTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3F1ZXN0aW9uJywgcXVlc3Rpb24pO1xyXG5cclxuICAvL29ubHkgYWNjZXB0IHBvc3QgcmVxdWVzdHNcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghcXVlc3Rpb24pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdObyBxdWVzdGlvbiBpbiB0aGUgcmVxdWVzdCcgfSk7XHJcbiAgfVxyXG4gIC8vIE9wZW5BSSByZWNvbW1lbmRzIHJlcGxhY2luZyBuZXdsaW5lcyB3aXRoIHNwYWNlcyBmb3IgYmVzdCByZXN1bHRzXHJcbiAgY29uc3Qgc2FuaXRpemVkUXVlc3Rpb24gPSBxdWVzdGlvbi50cmltKCkucmVwbGFjZUFsbCgnXFxuJywgJyAnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGluZGV4ID0gcGluZWNvbmUuSW5kZXgoUElORUNPTkVfSU5ERVhfTkFNRSk7XHJcblxyXG4gICAgLyogY3JlYXRlIHZlY3RvcnN0b3JlKi9cclxuICAgIGNvbnN0IHZlY3RvclN0b3JlID0gYXdhaXQgUGluZWNvbmVTdG9yZS5mcm9tRXhpc3RpbmdJbmRleChcclxuICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3Moe30pLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGluZWNvbmVJbmRleDogaW5kZXgsXHJcbiAgICAgICAgdGV4dEtleTogJ3RleHQnLFxyXG4gICAgICAgIG5hbWVzcGFjZTogUElORUNPTkVfTkFNRV9TUEFDRSwgLy9uYW1lc3BhY2UgY29tZXMgZnJvbSB5b3VyIGNvbmZpZyBmb2xkZXJcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgLy9jcmVhdGUgY2hhaW5cclxuICAgIGNvbnN0IGNoYWluID0gbWFrZUNoYWluKHZlY3RvclN0b3JlKTtcclxuICAgIC8vQXNrIGEgcXVlc3Rpb24gdXNpbmcgY2hhdCBoaXN0b3J5XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNoYWluLmNhbGwoe1xyXG4gICAgICBxdWVzdGlvbjogc2FuaXRpemVkUXVlc3Rpb24sXHJcbiAgICAgIGNoYXRfaGlzdG9yeTogaGlzdG9yeSB8fCBbXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJPcGVuQUlFbWJlZGRpbmdzIiwiUGluZWNvbmVTdG9yZSIsIm1ha2VDaGFpbiIsInBpbmVjb25lIiwiUElORUNPTkVfSU5ERVhfTkFNRSIsIlBJTkVDT05FX05BTUVfU1BBQ0UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlc3Rpb24iLCJoaXN0b3J5IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwic2FuaXRpemVkUXVlc3Rpb24iLCJ0cmltIiwicmVwbGFjZUFsbCIsImluZGV4IiwiSW5kZXgiLCJ2ZWN0b3JTdG9yZSIsImZyb21FeGlzdGluZ0luZGV4IiwicGluZWNvbmVJbmRleCIsInRleHRLZXkiLCJuYW1lc3BhY2UiLCJjaGFpbiIsInJlc3BvbnNlIiwiY2FsbCIsImNoYXRfaGlzdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms/openai */ \"langchain/llms/openai\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.\r\n\r\nChat History:\r\n{chat_history}\r\nFollow Up Input: {question}\r\nStandalone question:`;\nconst QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.\r\nIf you don't know the answer, just say you don't know. DO NOT try to make up an answer.\r\nIf the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.\r\n\r\n{context}\r\n\r\nQuestion: {question}\r\nHelpful answer in markdown:`;\nconst makeChain = (vectorstore)=>{\n    const model = new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        temperature: 1,\n        modelName: \"gpt-3.5-turbo\"\n    });\n    const chain = langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ConversationalRetrievalQAChain.fromLLM(model, vectorstore.asRetriever(), {\n        qaTemplate: QA_PROMPT,\n        questionGeneratorTemplate: CONDENSE_PROMPT,\n        returnSourceDocuments: true\n    });\n    return chain;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRW1CO0FBRWxFLE1BQU1FLGtCQUFrQixDQUFDOzs7OztvQkFLTCxDQUFDO0FBRXJCLE1BQU1DLFlBQVksQ0FBQzs7Ozs7OzsyQkFPUSxDQUFDO0FBRXJCLE1BQU1DLFlBQVksQ0FBQ0MsY0FBK0I7SUFDdkQsTUFBTUMsUUFBUSxJQUFJTix5REFBTUEsQ0FBQztRQUN2Qk8sYUFBYTtRQUNiQyxXQUFXO0lBQ2I7SUFFQSxNQUFNQyxRQUFRUixvRkFBc0MsQ0FDbERLLE9BQ0FELFlBQVlNLFdBQVcsSUFDdkI7UUFDRUMsWUFBWVQ7UUFDWlUsMkJBQTJCWDtRQUMzQlksdUJBQXVCLElBQUk7SUFDN0I7SUFFRixPQUFPTDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncHQ0LWxhbmdjaGFpbi1wZGYtY2hhdGJvdC8uL3V0aWxzL21ha2VjaGFpbi50cz9jZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5BSSB9IGZyb20gJ2xhbmdjaGFpbi9sbG1zL29wZW5haSc7XHJcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tICdsYW5nY2hhaW4vdmVjdG9yc3RvcmVzL3BpbmVjb25lJztcclxuaW1wb3J0IHsgQ29udmVyc2F0aW9uYWxSZXRyaWV2YWxRQUNoYWluIH0gZnJvbSAnbGFuZ2NoYWluL2NoYWlucyc7XHJcblxyXG5jb25zdCBDT05ERU5TRV9QUk9NUFQgPSBgR2l2ZW4gdGhlIGZvbGxvd2luZyBjb252ZXJzYXRpb24gYW5kIGEgZm9sbG93IHVwIHF1ZXN0aW9uLCByZXBocmFzZSB0aGUgZm9sbG93IHVwIHF1ZXN0aW9uIHRvIGJlIGEgc3RhbmRhbG9uZSBxdWVzdGlvbi5cclxuXHJcbkNoYXQgSGlzdG9yeTpcclxue2NoYXRfaGlzdG9yeX1cclxuRm9sbG93IFVwIElucHV0OiB7cXVlc3Rpb259XHJcblN0YW5kYWxvbmUgcXVlc3Rpb246YDtcclxuXHJcbmNvbnN0IFFBX1BST01QVCA9IGBZb3UgYXJlIGEgaGVscGZ1bCBBSSBhc3Npc3RhbnQuIFVzZSB0aGUgZm9sbG93aW5nIHBpZWNlcyBvZiBjb250ZXh0IHRvIGFuc3dlciB0aGUgcXVlc3Rpb24gYXQgdGhlIGVuZC5cclxuSWYgeW91IGRvbid0IGtub3cgdGhlIGFuc3dlciwganVzdCBzYXkgeW91IGRvbid0IGtub3cuIERPIE5PVCB0cnkgdG8gbWFrZSB1cCBhbiBhbnN3ZXIuXHJcbklmIHRoZSBxdWVzdGlvbiBpcyBub3QgcmVsYXRlZCB0byB0aGUgY29udGV4dCwgcG9saXRlbHkgcmVzcG9uZCB0aGF0IHlvdSBhcmUgdHVuZWQgdG8gb25seSBhbnN3ZXIgcXVlc3Rpb25zIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNvbnRleHQuXHJcblxyXG57Y29udGV4dH1cclxuXHJcblF1ZXN0aW9uOiB7cXVlc3Rpb259XHJcbkhlbHBmdWwgYW5zd2VyIGluIG1hcmtkb3duOmA7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUNoYWluID0gKHZlY3RvcnN0b3JlOiBQaW5lY29uZVN0b3JlKSA9PiB7XHJcbiAgY29uc3QgbW9kZWwgPSBuZXcgT3BlbkFJKHtcclxuICAgIHRlbXBlcmF0dXJlOiAxLCAvLyBpbmNyZWFzZSB0ZW1lcHJlYXR1cmUgdG8gZ2V0IG1vcmUgY3JlYXRpdmUgYW5zd2Vyc1xyXG4gICAgbW9kZWxOYW1lOiAnZ3B0LTMuNS10dXJibycsIC8vY2hhbmdlIHRoaXMgdG8gZ3B0LTQgaWYgeW91IGhhdmUgYWNjZXNzXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNoYWluID0gQ29udmVyc2F0aW9uYWxSZXRyaWV2YWxRQUNoYWluLmZyb21MTE0oXHJcbiAgICBtb2RlbCxcclxuICAgIHZlY3RvcnN0b3JlLmFzUmV0cmlldmVyKCksXHJcbiAgICB7XHJcbiAgICAgIHFhVGVtcGxhdGU6IFFBX1BST01QVCxcclxuICAgICAgcXVlc3Rpb25HZW5lcmF0b3JUZW1wbGF0ZTogQ09OREVOU0VfUFJPTVBULFxyXG4gICAgICByZXR1cm5Tb3VyY2VEb2N1bWVudHM6IHRydWUsIC8vVGhlIG51bWJlciBvZiBzb3VyY2UgZG9jdW1lbnRzIHJldHVybmVkIGlzIDQgYnkgZGVmYXVsdFxyXG4gICAgfSxcclxuICApO1xyXG4gIHJldHVybiBjaGFpbjtcclxufTtcclxuIl0sIm5hbWVzIjpbIk9wZW5BSSIsIkNvbnZlcnNhdGlvbmFsUmV0cmlldmFsUUFDaGFpbiIsIkNPTkRFTlNFX1BST01QVCIsIlFBX1BST01QVCIsIm1ha2VDaGFpbiIsInZlY3RvcnN0b3JlIiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1vZGVsTmFtZSIsImNoYWluIiwiZnJvbUxMTSIsImFzUmV0cmlldmVyIiwicWFUZW1wbGF0ZSIsInF1ZXN0aW9uR2VuZXJhdG9yVGVtcGxhdGUiLCJyZXR1cm5Tb3VyY2VEb2N1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1sYW5nY2hhaW4tcGRmLWNoYXRib3QvLi91dGlscy9waW5lY29uZS1jbGllbnQudHM/ZGYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZUNsaWVudCB9IGZyb20gJ0BwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZSc7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52LlBJTkVDT05FX0VOVklST05NRU5UIHx8ICFwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQaW5lY29uZSBlbnZpcm9ubWVudCBvciBhcGkga2V5IHZhcnMgbWlzc2luZycpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0UGluZWNvbmUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBpbmVjb25lID0gbmV3IFBpbmVjb25lQ2xpZW50KCk7XHJcblxyXG4gICAgYXdhaXQgcGluZWNvbmUuaW5pdCh7XHJcbiAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9FTlZJUk9OTUVOVCA/PyAnJywgLy90aGlzIGlzIGluIHRoZSBkYXNoYm9hcmRcclxuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/ICcnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBpbmVjb25lO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWFsaXplIFBpbmVjb25lIENsaWVudCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBpbmVjb25lID0gYXdhaXQgaW5pdFBpbmVjb25lKCk7XHJcbiJdLCJuYW1lcyI6WyJQaW5lY29uZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9FTlZJUk9OTUVOVCIsIlBJTkVDT05FX0FQSV9LRVkiLCJFcnJvciIsImluaXRQaW5lY29uZSIsInBpbmVjb25lIiwiaW5pdCIsImVudmlyb25tZW50IiwiYXBpS2V5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();