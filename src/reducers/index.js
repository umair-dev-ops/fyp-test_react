import pageChange from "./changePage";
import stateMaintain from "./form-obj";
import validateButton from "./next-button-validation";
import skillsManage from "./skills";
import transcMaintain from "./forTransc";
import stateRecommendation from "./forRecommendations";

import { combineReducers } from "redux";
const rootReducer=combineReducers({
    pageChange,
    stateMaintain,
    validateButton,
    skillsManage,
    transcMaintain,
    stateRecommendation,
})

export default rootReducer;