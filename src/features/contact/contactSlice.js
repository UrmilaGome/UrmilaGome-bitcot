import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "Contact",
    initialState: {

        contacts: [
            {
                "id": 1,
                "PersonName": "Aaron",
                "mobile": "5785664545",
                "email": "aaron@gmail.com"
            },
            {
                "id": 2,
                "PersonName": "Buincy Hanson",
                "mobile": "5785664545",
                "email": "hanson@gmail.com"
            }
        ],

        viewContact: {

        },

        editcontact: {
            contact: {},
            isedit: false,
        },
        search : null

    },
    reducers: {

        remove: (state, action) => {
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload),
                search: state.search.filter((contact) => contact.id !== action.payload)

            }
        },

        add: (state, action) => {
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        },

        view: (state, action) => {
            return {
                ...state,
                viewContact: action.payload
            }
        },

        edit: (state, action) => {
            return {
                ...state,
                editcontact: { contact: action.payload, isedit: true }
            }

        },
        search : (state,action)=>{
            return{
                ...state,
                search : state.contacts.filter((item)=> item.PersonName.includes(action.payload))
            }
        },

        update: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    // console.log(contact.id === action.payload.id)
                    contact.id === action.payload.id ?
                        {
                            ...contact,
                            PersonName: action.payload.PersonName,
                            mobile: action.payload.mobile,
                            email: action.payload.email,
                        } : contact
                ),
                search: state.search.map((search) =>
                    // console.log(contact.id === action.payload.id)
                    search.id === action.payload.id ?
                        {
                            ...search,
                            PersonName: action.payload.PersonName,
                            mobile: action.payload.mobile,
                            email: action.payload.email,
                        } : search
                ),

                editcontact: {
                    contact: {},
                    isedit: false,
                }
            }
        }
    }
})
// , add, edit, update
export const { remove, add, edit, update, view,search } = contactSlice.actions;
export default contactSlice.reducer;