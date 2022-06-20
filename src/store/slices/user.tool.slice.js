import { createSlice } from '@reduxjs/toolkit';
const userToolSlice = createSlice({
    name: 'userAllocatedTools',
    initialState: {
        allocatedTools: [],
        userTool: {},
        toolsList: [],
    },
    reducers: {
        getTools(state, action) {},
        setTools(state, action) {
            const userTools = action.payload;
            state.allocatedTools = userTools;
        },
        getToolsList(state, action) {},
        setToolsList(state, action) {
            const toolsList = action.payload;
            state.toolsList = toolsList;
        },
        getAllocatedTools(state, action) {},
        setAllocatedTools(state, action) {
            const allocatedTools = action.payload;
            state.allocatedTools = allocatedTools;
            // const userTool = userTool;
            // const userTool = userTool;
            // const allocatedToolsList = action.payload;
            // state.tool_id = allocatedToolsList.tool_id;
            // state.return_date = allocatedToolsList.return_date;
            // state.location_of_work = allocatedToolsList.location_of_work;
            // state.signature = allocatedToolsList.signature;
            // state.userTool = allocatedToolsList;
            // state.toolsList = allocatedToolsList;
        },
    },
});

export const { getTools, setTools, getAllocatedTools, setAllocatedTools, getToolsList, setToolsList } =
    userToolSlice.actions;
export default userToolSlice.reducer;
