import Link from "next/link"
export default function NavBar() {
    return (
        <nav className="p-4 bg-blue-400 text-white">
        <ul className="flex space-x-4">
            <li><Link href="/">홈</Link></li>
            <li><Link href="/about">캘린더</Link></li>
            <li><Link href="/contact">학생관리</Link></li>
        </ul>
        </nav>
    )
}