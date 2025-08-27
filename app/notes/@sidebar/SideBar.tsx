import { getCategories } from "@/lib/api"
import css from "./Sidebar.module.css"

export default async function SideBar() {
	const tags: string[] = await getCategories()
	return (
		<div className={css.menuContainer}>
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
