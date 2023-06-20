import Link from "next/link"

export default function Home() {
  let name = 'chloe'
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">list</Link>
      </div>
      <h4 className="title">YSLBeauty</h4>
      <p className="title-sub">by dev {name}</p>
      <a href="https://www.yslbeautykr.com/ko_KR/home">YSL공식홈페이지</a>
    </div>
  )
}