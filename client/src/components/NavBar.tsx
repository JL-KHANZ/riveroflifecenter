import Link from "next/link"
import '../styles/styles.css'

export default function NavBar() {
    return (
        <nav className="navBar">
            <ul className="space-x-4">
                <li><Link href="/">홈</Link></li>
                <li><Link href="/calendar">캘린더</Link></li>
                <li><Link href="/contact">학생관리</Link></li>
            </ul>
        </nav>
    )
}