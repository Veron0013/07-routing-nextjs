import SideBar from "./@sidebar/SideBar"

export default async function NotesLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div style={{ display: "flex", gap: "24px", flexGrow: "1" }}>
			<aside>
				<SideBar />
			</aside>
			{children}
		</div>
	)
}
