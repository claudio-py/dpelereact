import './Wpp.css'
export default function Wpp() {
  return (
    <div class="wpp">
      <a
        href="https://api.whatsapp.com/send?phone=5592988665533"
        target="_blank">
        <img className="about-logo" src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" />
      </a>
      <object type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/wpp.svg`}></object>
    </div>
  )
}