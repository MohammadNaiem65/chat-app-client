import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
                
        })
    })
});

export default authApi;