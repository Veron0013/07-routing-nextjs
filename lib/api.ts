import axios from "axios"
import { MAIN_URL, PER_PAGE } from "@/lib/vars"
import type { Note, NoteId, NotePost, NotesData, SortBy, Tag } from "@/types/note"

axios.defaults.baseURL = MAIN_URL
axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`

export interface SearchParams {
	search: string
	tag?: Tag
	page?: number
	perPage?: number
	sortBy?: SortBy
}

interface ApiQueryParams {
	params: SearchParams
}

export const createQueryParams = (search = "", page = 1): ApiQueryParams => ({
	params: {
		search,
		page,
		perPage: PER_PAGE,
	},
})

export const fetchNotes = async (queryParams: ApiQueryParams): Promise<NotesData> => {
	//const url: string = id === null ? MAIN_URL : `${MAIN_URL}/${id}`
	const response = await axios.get<NotesData>(MAIN_URL, queryParams)
	return response.data
}

export const deleteNote = async (id: NoteId): Promise<Note> => {
	const response = await axios.delete<Note>(`${MAIN_URL}/${id}`)
	return response.data
}

export const createNote = async (queryParams: NotePost): Promise<Note> => {
	//console.log("creation", queryParams)
	const response = await axios.post<Note>(MAIN_URL, queryParams)
	return response.data
}

export const updateNote = async (queryParams: NotePost, id: NoteId): Promise<Note> => {
	const response = await axios.patch<Note>(`${MAIN_URL}/${id}`, queryParams)
	return response.data
}

export const getSingleNote = async (id: NoteId): Promise<Note> => {
	const response = await axios.get<Note>(`${MAIN_URL}/${id}`)
	return response.data
}
