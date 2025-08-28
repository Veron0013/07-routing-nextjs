import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { getSingleNote } from "@/lib/api"
import NotePreview from "@/components/NotePreview/NotePreview"
import ModalNote from "@/components/ModalNote/ModalNote"

type Props = {
	params: Promise<{ id: string }>
}

const NoteDetails = async ({ params }: Props) => {
	const { id } = await params
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ["notesQuery", id],
		queryFn: () => getSingleNote(id),
	})

	return (
		<ModalNote>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<NotePreview />
			</HydrationBoundary>
		</ModalNote>
	)
}

export default NoteDetails
