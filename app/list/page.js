
export default function List() {
  let 상품 = ['베르니 아 레브르 바이닐 크림틴트', '캔디 글레아즈컬러밤']

  let a = [20, 30]
  console.log(a)

  return (
    <div>
      <h4 className="title">베스트셀러</h4>
      <div className="lip">
        <h4>상품1 49.000</h4>
      </div>
      <div className="lip">
        <h4>상품2 49.000</h4>
      </div>
    </div>
  )
}