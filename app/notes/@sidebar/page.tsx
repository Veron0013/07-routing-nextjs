import css from "./Sidebar.module.css"

type TagsProps = {
	tags: string[]
}

export default function SideBar({ tags }: TagsProps) {
	return (
		<div className={css.menuContainer}>
			<button className={css.menuButton}>Notes ▾</button>
			<ul className={css.menuList}>
				<li className={css.menuItem} key={tags?.length + 1 || 0}>
					<a href={`/notes/filter/All`} className={css.menuLink}>
						All notes
					</a>
				</li>
				{tags?.length > 0 &&
					tags.map((item: string, index: number) => {
						return (
							<li className={css.menuItem} key={index}>
								<a href={`/notes/filter/${item}`} className={css.menuLink}>
									{item}
								</a>
							</li>
						)
					})}
			</ul>
		</div>
	)
}
