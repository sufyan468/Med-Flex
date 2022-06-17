import { createSlice } from '@reduxjs/toolkit';
const userToolSlice = createSlice({
    name: 'userAllocatedTools',
    initialState: {
        allocatedTools: [],
        toolsList: [],
    },
    reducers: {
        getTools(state, action) {},
        setTools(state, action) {
            const userTools = action.payload;
            state.tools = userTools;
        },
        getToolsList(state, action) {},
        setToolsList(state, action) {
            const toolsList = action.payload;
            state.toolsList = toolsList;
        },
    },
});

export const { getTools, setTools, getToolsList, setToolsList } = userToolSlice.actions;
export default userToolSlice.reducer;
