export default function NotesLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div style={{ display: "flex", gap: "24px" }}>
			<aside>NotesLayout</aside>
			{children}
		</div>
	)
}
