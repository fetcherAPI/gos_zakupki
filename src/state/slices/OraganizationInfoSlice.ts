import {createSlice} from "@reduxjs/toolkit";

interface IOrganizationInfo<T> {
    nameOfBuying: T,
    offerDeadline: T,
    bidDeadline: T,
    typeOfCurrency: T,
    isEnsured: T,
    sourcesOfFinancing: T,
    ReasonsForChoosingRestrictedMethod: T,
    FirstImage: T | any,
    SecondImage: T | any,
    ChoiceOfApplication: T
}


const initialState: IOrganizationInfo<string> = {
    nameOfBuying: '',
    offerDeadline: '',
    bidDeadline: '',
    typeOfCurrency: '',
    isEnsured: '',
    sourcesOfFinancing: '',
    ReasonsForChoosingRestrictedMethod: '',
    FirstImage: '',
    SecondImage: '',
    ChoiceOfApplication: ''
};


export const organizationInfoSlice = createSlice({
    name: "organizationInfo",
    initialState,
    reducers: {
        setNameOfBuying(state, action) {
            state.nameOfBuying = action.payload;
        },
        setOfferDeadline(state, action) {
            state.offerDeadline = action.payload;
        },
        setBidDeadline(state, action) {
            state.bidDeadline = action.payload;
        },
        setTypeOfCurrency(state, action) {
            state.typeOfCurrency = action.payload;
        },
        setIsEnsured(state, action) {
            state.isEnsured = action.payload;
        },
        setSourcesOfFinancing(state, action) {
            state.sourcesOfFinancing = action.payload;
        },
        setReasonsForChoosingRestrictedMethod(state, action) {
            state.ReasonsForChoosingRestrictedMethod = action.payload
        },
        setFirstImage(state, action): any {
            state.FirstImage = action.payload
        },
        setSecondImage(state, action) {
            state.SecondImage = action.payload
        },
        setChoiceOfApplication(state, action) {
            state.ChoiceOfApplication = action.payload
        },


    },

});

export const {
    setBidDeadline,
    setChoiceOfApplication,
    setFirstImage,
    setIsEnsured,
    setOfferDeadline,
    setNameOfBuying,
    setReasonsForChoosingRestrictedMethod,
    setSecondImage,
    setSourcesOfFinancing,
    setTypeOfCurrency
} = organizationInfoSlice.actions;

export default organizationInfoSlice.reducer;
